import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteItem, getItemDetails } from "../api/data.js";

const detailsTemplate = (data, onDelete) => html`
<div class="container home some">
    <img class="det-img" src="${data.img}" />
    <div class="desc">
        <h2 class="display-5">${data.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${data.description}</p>
    </div>
    <div class="text-center">
        ${sessionStorage.getItem('userId') == data._ownerId 
            ? html`<a @click=${onDelete} class="btn detb" href="#">Delete</a>`
            : ''
        }
    </div>
</div>`;

export async function detailsPage(ctx) {
        const data = await getItemDetails(ctx.params.id);
        ctx.render(detailsTemplate(data, onDelete));
    async function onDelete(){
        if (confirm('Are you sure that you want to delete this item?')) {
            await deleteItem(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }
}