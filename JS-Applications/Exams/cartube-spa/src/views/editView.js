import { html } from "../../node_modules/lit-html/lit-html.js";
import { updateCar, getCarDetails } from "../api/data.js";

const editTemplate = (data, onSubmit) => html`
<section id="edit-listing">
    <div class="container">

        <form @submit=${onSubmit} id="edit-form">
            <h1>Edit Car Listing</h1>
            <p>Please fill in this form to edit an listing.</p>
            <hr>

            <p>Car Brand</p>
            <input type="text" placeholder="Enter Car Brand" name="brand" .value="${data.brand}">

            <p>Car Model</p>
            <input type="text" placeholder="Enter Car Model" name="model" .value="${data.model}">

            <p>Description</p>
            <input type="text" placeholder="Enter Description" name="description" .value="${data.description}">

            <p>Car Year</p>
            <input type="number" placeholder="Enter Car Year" name="year" .value="${data.year}">

            <p>Car Image</p>
            <input type="text" placeholder="Enter Car Image" name="imageUrl" .value="${data.imageUrl}">

            <p>Car Price</p>
            <input type="number" placeholder="Enter Car Price" name="price" .value="${data.price}">

            <hr>
            <input type="submit" class="registerbtn" value="Edit Listing">
        </form>
    </div>
</section>`;

export async function editView(ctx) {
    const data = await getCarDetails(ctx.params.id);
    ctx.render(editTemplate(data, onSubmit));

    async function onSubmit(e) {
        e.preventDefault();

        const formdata = new FormData(e.currentTarget);
        const data = [...formdata.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});

        if (Object.values(data).some(v => v == '')) {
            return alert('All fields are required!');
        }
        if (data.year < 0 || data.price < 0) {
            return alert('Year and price must be positive numbers!');
        }
        data.year = Number(data.year);
        data.price = Number(data.price);

        await updateCar(ctx.params.id, data);
        ctx.page.redirect('/catalog');
    }
}