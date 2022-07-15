import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteItem, getAllComments, getItemDetails, postComments } from "../api/data.js";

const detailsTemplate = (data, comments, onDelete, onSubmit) => html`
<section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">

        <div class="game-header">
            <img class="game-img" src="${data.imageUrl}" />
            <h1>${data.title}</h1>
            <span class="levels">MaxLevel: ${data.maxLevel}</span>
            <p class="type">${data.category}</p>
        </div>

        <p class="text">${data.summary}</p>

        <!-- Bonus ( for Guests and Users ) -->
        <div class="details-comments">
            <h2>Comments:</h2>
            <!-- list all comments for current game (If any) -->
            ${comments.length != 0 ? html`<ul>${comments.map(commTemplate)}</ul>`
            : html`<p class="no-comment">No comments.</p>`}

            <!-- Display paragraph: If there are no games in the database -->
        </div>

        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
        ${sessionStorage['userId'] == data._ownerId ?
        html`<div class="buttons">
            <a href="/edit/${data._id}" class="button">Edit</a>
            <a @click=${onDelete} href="#" class="button">Delete</a>
        </div>` : ''}
    </div>

    ${sessionStorage['userId'] != data._ownerId && sessionStorage['userId'] != null ?
        html`<article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onSubmit} class="form">
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment">
        </form>
    </article>` : ''}


    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
</section>`;

const commTemplate = (item) => html`
<li class="comment">
    <p>Content: ${item.comment}</p>
</li>`;

export async function detailsPage(ctx) {
    let [data, comments] = await Promise.all([
        getItemDetails(ctx.params.id),
        getAllComments(ctx.params.id)
    ]);

    ctx.render(detailsTemplate(data, comments, onDelete, onSubmit));

    async function onDelete() {
        if (confirm('Are you sure that you want to delete this item?')) {
            await deleteItem(ctx.params.id);
            ctx.page.redirect('/');
        }
    }

    async function onSubmit(e) {
        e.preventDefault();

        const formdata = new FormData(e.currentTarget);
        const comment = formdata.get('comment').trim();
        const id = ctx.params.id;
        await postComments({ id, comment });
        
        ctx.page.redirect(`/details/${ctx.params.id}`);
    }
}