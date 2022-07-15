import { html } from "../../node_modules/lit-html/lit-html.js";
import { updateItem, getItemDetails } from "../api/data.js";

const editTemplate = (data, onSubmit) => html`
<section id="edit-movie">
    <form @submit=${onSubmit} class="text-center border border-light p-5" action="#" method="">
        <h1>Edit Movie</h1>
        <div class="form-group">
            <label for="title">Movie Title</label>
            <input type="text" class="form-control" placeholder="Movie Title" value="" name="title"
                .value=${data.title}>
        </div>
        <div class="form-group">
            <label for="description">Movie Description</label>
            <textarea class="form-control" placeholder="Movie Description..." name="description"
                .value=${data.description}></textarea>
        </div>
        <div class="form-group">
            <label for="imageUrl">Image url</label>
            <input type="text" class="form-control" placeholder="Image Url" value="" name="imageUrl"
                .value=${data.img}>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
</section>`;

export async function editPage(ctx) {
    const data = await getItemDetails(ctx.params.id);
    ctx.render(editTemplate(data, onSubmit));
    console.log(data);
    async function onSubmit(e) {
        e.preventDefault();

        const formdata = new FormData(e.currentTarget);
        const title = formdata.get('title').trim();
        const description = formdata.get('description').trim();
        const img = formdata.get('imageUrl').trim();

        if (!title || !description || !img) {
            return alert('All fields are required!');
        }

        await updateItem(ctx.params.id, { description, img, title });
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}

// [...formdata.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});