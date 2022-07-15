import { html } from "../../node_modules/lit-html/lit-html.js";
import { deleteCar, getCarDetails } from "../api/data.js";

const detailsTemplate = (data, onDelete) => html`
<section id="listing-details">
    <h1>Details</h1>
    <div class="details-info">
        <img src="${data.imageUrl}">
        <hr>
        <ul class="listing-props">
            <li><span>Brand:</span>${data.brand}</li>
            <li><span>Model:</span>${data.model}</li>
            <li><span>Year:</span>${data.year}</li>
            <li><span>Price:</span>${data.price}</li>
        </ul>

        <p class="description-para">${data.description}</p>

        ${sessionStorage.getItem('userId') === data._ownerId 
            ? html`<div class="listings-buttons">
            <a href="/edit/${data._id}" class="button-list">Edit</a>
            <a @click=${onDelete} href="#" class="button-list">Delete</a>
        </div>` 
            : ''}
    </div>
</section>`;

export async function detailsView(ctx) {
    const data = await getCarDetails(ctx.params.id);
    ctx.render(detailsTemplate(data, onDelete));

    async function onDelete() {
        if (confirm('Are you sure that you want to delete this item?')) {
            await deleteCar(ctx.params.id);
        }
        ctx.page.redirect('/catalog');
    }
}

