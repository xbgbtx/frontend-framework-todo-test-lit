import { LitElement, html, css } from 'lit';

export class ListDisplay extends LitElement
{
    static get properties () 
    {
        return {
            title : {
                type: String
            },
            items : {
                type: Array
            }
        };
    }

    constructor ()
    {
        super ();
        this.title = "List Display:";
        this.items = [];
    }

    render()
    {
        return html`
            <div>
                <h1>${this.title}</h1>
                ${this.list_html()}
            </div>
        `;
    }

    list_html()
    {
        if ( this.items.length == 0 )
            return html`<p>No items</p>`;

        const li_items = this.items.map ( i => html`<li>${i}</li>` );

        return html`<ul>${li_items}</ul>`;

    }
}
customElements.define('list-display', ListDisplay );

