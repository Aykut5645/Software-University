import { html } from "../../node_modules/lit-html/lit-html.js";
import { search } from "../api/data.js";

const searchTemplate = (onClick, data = []) => html`
<section id="search-cars">
    <h1>Filter by year</h1>
    
    <div class="container">
        <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
        <button @click=${onClick} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>
    <div class="listings">
        ${data.length != 0 
            ? data.map(itemTemplate)
            : html`<p class="no-cars"> No results.</p>`
        }
</section>`;

const itemTemplate = (item) => html` 
<div class="listing">
    <div class="preview">
        <img src="${item.imageUrl}">
    </div>
    <h2>${item.brand} ${item.model}</h2>
    <div class="info">
        <div class="data-info">
            <h3>Year: ${item.year}</h3>
            <h3>Price: ${item.price} $</h3>
        </div>
        <div class="data-buttons">
            <a href="${item._id}" class="button-carDetails">Details</a>
        </div>
    </div>
</div>`;


export async function searchView(ctx) {
    ctx.render(searchTemplate(onClick));
    
    async function onClick() {
        const input = document.getElementById('search-input').value;
        const data = await search(input);
        ctx.render(searchTemplate(data));

        foo(data);
    }
    
    function foo(data) {
        ctx.render(searchTemplate(onClick, data));
    }
}