import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemeDetails, updateMeme } from '../api/data.js';
import { notify } from '../notification.js';

const editTemplate = (data, onSubmit) => html`
<section id="edit-meme">
    <form @submit=${onSubmit} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title" .value=${data.title}>
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"
                .value=${data.description}></textarea>
            <label for="imageUrl">Image Url</label>
            <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${data.imageUrl}>
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>`;

export async function editView(ctx) {
    const data = await getMemeDetails(ctx.params.id);
    ctx.render(editTemplate(data, onSubmit));

    // without .value in html
    // - document.getElementById('title').value = data.title;
    // - document.getElementById('description').value = data.description;
    // - document.getElementById('imageUrl').value = data.imageUrl;

    async function onSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get('title').trim();
        const description = formData.get('description').trim();
        const imageUrl = formData.get('imageUrl').trim();

        try {
            if (!title || !description || !imageUrl) {
                throw new Error('All fields are required!');
            }

            await updateMeme(ctx.params.id, { title, description, imageUrl });
            ctx.page.redirect(`/details/${ctx.params.id}`);
        } catch (error) {
            notify(error.message);
        }
    }
}