import { html } from '../node_modules/lit-html/lit-html.js';
import { deleteFurn } from './api/data.js';
import { getFurnDetails } from './api/data.js';

const detailstTemplate = (item, onDelete) => html`
<div class="row space-top">
    <div class="col-md-12">
        <h1>Furniture Details</h1>
    </div>
</div>
<div class="row space-top">
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=/${item.img.substring(1)} />
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <p>Make: <span>${item.make}</span></p>
        <p>Model: <span>${item.model}</span></p>
        <p>Year: <span>${item.year}</span></p>
        <p>Description: <span>${item.description}</span></p>
        <p>Price: <span>${item.price}</span></p>
        <p>Material: <span>${item.material}</span></p>
        <div>
            <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
            <a @click=${onDelete} href=”#” class="btn btn-red">Delete</a>
        </div>
    </div>
</div>`;

export async function detailsView(ctx) {
    const item = await getFurnDetails(ctx.params.id);

    ctx.render(detailstTemplate(item, onDelete));

    if (item._ownerId !== sessionStorage.getItem('userId')) {
        [...document.querySelectorAll('.btn')].forEach(btn => btn.style.display = 'none');
    }

    async function onDelete(e) {
        e.preventDefault();
        const confirmed = confirm('Are you sure that you want to delete this item?')
        if (confirmed === true) {
            await deleteFurn(ctx.params.id);
        }
        ctx.page.redirect('/dashboard');
    }
}

