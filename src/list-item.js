import { LitElement, html, css } from 'lit';

export class ListItem extends LitElement
{
    static get properties () 
    {
        return {
            item_idx : {
                type: Number
            },
            item_text : {
                type: String
            },
            click_event_name : {
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
        let click_handler = _ =>
        {
            let click_event = new CustomEvent(
                this.click_event_name,
                {
                    detail : { item_idx : this.item_idx },
                    bubbles: true,
                    composed: true
                }
            );
            this.dispatchEvent(click_event);
        };
        return html`
            <span>
                ${this.item_text}
                <label for="done-button">Done:</label> 
                <button 
                    id="done-button"
                    @click=${click_handler}
                >
                    Mark Done
                </button>
            </span>
        `;
    }
}

customElements.define('list-item', ListItem );
