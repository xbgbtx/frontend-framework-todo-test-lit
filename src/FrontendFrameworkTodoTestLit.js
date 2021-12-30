import { LitElement, html, css } from 'lit';

import { ListDisplay } from "./list-display.js";
import { ListItem } from "./list-item.js";

export class FrontendFrameworkTodoTestLit extends LitElement {

    static get styles() 
    {
        return css`

            main {
            flex-grow: 1;
            }
        `;
    }

    static get properties () 
    {
        return {
            todo : {
                type: Array,
            }
        };
    }

    constructor()
    {
        super ();
        this.todo=[];
        this.addEventListener('done', e => console.log(e));
        this.item_count = 0;
    }

    render() 
    {
        return html`
            <main>
                <h1>ToDo using Lit</h1>
            </main>
        `;
    }
}

