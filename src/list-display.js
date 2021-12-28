import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('list-display')
export class ListDisplay extends LitElement
{
    render()
    {
        return html`
            <ul>
                <li>List item</li>
                <li>List item</li>
                <li>List item</li>
            </ul>
        `;
    }
}

