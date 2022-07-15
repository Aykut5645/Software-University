import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchItems } from "../api/data.js";

const searchTemplate = (onSubmit, data = []) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSubmit} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        ${data.length != 0
            ? data.map(itemTemplate) 
            : html`<h3 class="no-articles">No matching articles</h3>`
        }
    </div>
</section>`;

const itemTemplate = (item) => html`
<a class="article-preview" href="/details/${item._id}">
    <article>
        <h3>Topic: <span>${item.title}</span></h3>
        <p>Category: <span>${item.category}</span></p>
    </article>
</a>`;

// <!-- <h3 class="no-articles">No matching articles</h3> -->
export async function searchPage(ctx) {
    ctx.render(searchTemplate(onSubmit));

    async function onSubmit(e) {
        e.preventDefault();
        const query = document.querySelector('[name="search"]').value;
        if (!query) {
            return alert('Field must be fill!');
        }
        const data = await searchItems(query);
        foo(data);
    }

    function foo(data) {
        ctx.render(searchTemplate(onSubmit, data));
    }
}