import { LitElement, html, css } from 'lit';

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
customElements.define('list-display', ListDisplay );

