import { LitElement, html, css } from 'lit';

export class ListDisplay extends LitElement
{
    static get properties () 
    {
        return {
            title : {
                type: String
            }
        };
    }

    constructor ()
    {
        super ();
        this.title = "List Display:";
    }

    render()
    {
        return html`
            <div>
                <h1>${this.title}</h1>
                <ul>
                    <li>List item</li>
                    <li>List item</li>
                    <li>List item</li>
                </ul>
            </div>
        `;
    }
}
customElements.define('list-display', ListDisplay );

