import { html } from "../../node_modules/lit-html/lit-html.js";
import { updateItem, getItemDetails } from "../api/data.js";

const editTemplate = (data) => html`
`;

export async function editPage(ctx) {
    const data = await getItemDetails(ctx.params.id);
    ctx.render(editTemplate(data));
}

// [...formdata.entries()].reduce((p, [k, v]) => Object.assign(p, { [k]: v }), {});