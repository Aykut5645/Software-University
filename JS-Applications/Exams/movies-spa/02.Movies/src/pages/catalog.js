import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAllItems } from "../api/data.js";

const catalogTemplate = (data) => `
`;

export async function catalogPage(ctx) {
    const data = await getAllItems();
    ctx.render(catalogTemplate(data));
}