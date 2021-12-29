import { LitElement, html, css } from 'lit';

export class ListItem extends LitElement
{
    static get properties () 
    {
        return {
            item_id : {
                type : String
            },
            item_text : {
                type: String
            },
        };
    }

    constructor ()
    {
        super ();
        this.item_text = "Item Text";
    }

    render ()
    {
        return html`
            <span>
                ${this.item_text}
                <label for="${this.item_id}-button">Done:</label> 
                <button 
                    id="${this.item_id}-button"
                    onclick="console.log('${this.item_id}')"
                >
                    Mark Done
                </button>
            </span>
        `;
    }
}

customElements.define('list-item', ListItem );
