import { html } from "../../node_modules/lit-html/lit-html.js";
import { 
    getLikeSpecUser, 
    getLikes, 
    postLikes, 
    deleteItem, 
    getItemDetails 
} from "../api/data.js";

const detailsTemplate = (data, onDelete, onLike, like, ownLike) => html`

<section id="movie-example">
    <div class="container">
        <div class="row bg-light text-dark">
            <h1>Movie title: ${data.title}</h1>

            <div class="col-md-8">
                <img class="img-thumbnail" src="${data.img}" alt="Movie">
            </div>
            <div class="col-md-4 text-center">
                <h3 class="my-3 ">Movie Description</h3>
                <p>${data.description}</p>
                ${sessionStorage.getItem('authToken') != null
                    ? loggedTemplate(data, onDelete, onLike, ownLike)
                    : ''}
                <span class="enrolled-span">Liked ${like}</span>
            </div>
        </div>
    </div>
</section>`;

const loggedTemplate = (data, onDelete, onLike, ownLike) => {
    if (sessionStorage.getItem('userId') == data._ownerId) {
        return html`
        <a @click=${onDelete} class="btn btn-danger" href="#">Delete</a>
        <a class="btn btn-warning" href="/edit/${data._id}">Edit</a>`
    }
    return  html`<a id="like" @click=${onLike} class="btn btn-primary" href="#">Like</a>`
}

export async function detailsPage(ctx) {
    let [data, likes, ownLike] = await Promise.all([
        getItemDetails(ctx.params.id),
        getLikes(ctx.params.id),
        getLikeSpecUser(ctx.params.id)
    ]);

    ctx.render(detailsTemplate(data, onDelete, onLike, likes, ownLike));
    
    async function onDelete() {
        if (confirm('Are you sure that you want to delete current item?')) {
            await deleteItem(ctx.params.id);
            ctx.page.redirect('/');
        }
    }

    async function onLike(e) {
        if (!checkForDuplicates(ownLike.map(x => x.movieId))) {
            await postLikes({ movieId: ctx.params.id });
        }
        e.target.remove();
    }
}

function checkForDuplicates(array) {
    return new Set(array).size !== array.length
  }