import { html } from "../../node_modules/lit-html/lit-html.js";
import { updateItem, getItemDetails } from "../api/data.js";

const editTemplate = (data, onSubmit) => html`
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form @submit=${onSubmit} id="edit" action="#" method="">
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter article title" .value=${data.title}>
            </p>

            <p class="field category">
                <label for="category">Category:</label>
                <input type="text" name="category" id="category" placeholder="Enter article category"
                    .value=${data.category}>
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content" .value=${data.content}></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>`;

export async function editPage(ctx) {
    const data = await getItemDetails(ctx.params.id);
    ctx.render(editTemplate(data, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const title = document.getElementById('title').value;
        const category = document.getElementById('category').value;
        const content = document.getElementById('content').value;

        if (!title || !category || !content) {
            return alert('All fields are required!');
        }

        await updateItem(ctx.params.id, { title, category, content });
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}

// [...formdata.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});