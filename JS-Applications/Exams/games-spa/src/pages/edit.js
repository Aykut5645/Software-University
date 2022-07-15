import { html } from "../../node_modules/lit-html/lit-html.js";
import { updateItem, getItemDetails } from "../api/data.js";

const editTemplate = (data, onSubmit) => html`
<section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
        <div class="container">

            <h1>Edit Game</h1>
            <label for="leg-title">Legendary title:</label>
            <input type="text" id="title" name="title" .value=${data.title}>

            <label for="category">Category:</label>
            <input type="text" id="category" name="category" .value=${data.category}>

            <label for="levels">MaxLevel:</label>
            <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${data.maxLevel}>

            <label for="game-img">Image:</label>
            <input type="text" id="imageUrl" name="imageUrl" .value=${data.imageUrl}>

            <label for="summary">Summary:</label>
            <textarea name="summary" id="summary" .value=${data.summary} ></textarea>
            <input class="btn submit" type="submit" value="Edit Game">

        </div>
    </form>
</section>`;

export async function editPage(ctx) {
    const data = await getItemDetails(ctx.params.id);
    ctx.render(editTemplate(data, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formdata = new FormData(e.currentTarget);
        const title = formdata.get('title').trim();
        const category = formdata.get('category').trim();
        const maxLevel = formdata.get('maxLevel').trim();
        const imageUrl = formdata.get('imageUrl').trim();
        const summary = formdata.get('summary').trim();

        if (!title || !category || !maxLevel || !imageUrl || !summary) {
            return alert('All fields are required!');
        }

        await updateItem(ctx.params.id, { title, category, maxLevel, imageUrl, summary });
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}