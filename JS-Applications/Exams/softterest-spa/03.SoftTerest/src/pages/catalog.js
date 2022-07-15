import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllItems } from "../api/data.js";

const catalogTemplate = (data) => html`
<div id="dashboard-holder">
    ${data.length != 0 
        ? data.map(itemTemplate) 
        : html`<h1>No ideas yet! Be the first one :)</h1>`
    }
</div>`;

const itemTemplate = (item) => html`
<div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
    <div class="card-body">
        <p class="card-text">${item.title}</p>
    </div>
    <img class="card-image" src="${item.img}" alt="Card image cap">
    <a class="btn" href="/details/${item._id}">Details</a>
</div>`;

export async function catalogPage(ctx) {
    const data = await getAllItems();
    ctx.render(catalogTemplate(data));
}