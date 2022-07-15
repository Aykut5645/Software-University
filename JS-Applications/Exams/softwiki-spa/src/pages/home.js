import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMostRecentArticles } from "../api/data.js";

const homeTemplate = (data) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    <section class="recent js">
        <h2>JavaScript</h2>
        ${data.javascript().length != 0
            ? data.javascript().map(itemTemplate) 
            : html`<h3 class="no-articles">No articles yet</h3>`
        }
    </section>
    <section class="recent csharp">
        <h2>C#</h2>
        ${data.cisharp().length != 0
            ? data.cisharp().map(itemTemplate) 
            : html`<h3 class="no-articles">No articles yet</h3>`
        }
    </section>
    <section class="recent java">
        <h2>Java</h2>
        ${data.java().length != 0
            ? data.java().map(itemTemplate) 
            : html`<h3 class="no-articles">No articles yet</h3>`
        }
    </section>
    <section class="recent python">
        <h2>Python</h2>
        ${data.python().length != 0
            ? data.python().map(itemTemplate) 
            : html`<h3 class="no-articles">No articles yet</h3>`
        }
    </section>
</section>`;

const itemTemplate = (item) => html`
<article>
    <h3>${item.title}</h3>
    <p>${item.content}</p>
    <a href="/details/${item._id}" class="btn details-btn">Details</a>
</article>`;

export async function homePage(ctx) {
    const data = await getMostRecentArticles();
    
    const handledData = {
        javascript: () => data.filter(x => x.category === 'JavaScript'),
        cisharp: () => data.filter(x => x.category === 'C#'),
        java: () => data.filter(x => x.category === 'Java'),
        python: () => data.filter(x => x.category === 'Python')
    };
    ctx.render(homeTemplate(handledData));
}