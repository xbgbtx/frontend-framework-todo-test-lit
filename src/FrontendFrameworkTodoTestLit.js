import { LitElement, html, css } from 'lit';

import { ListDisplay } from "./list-display.js";

export class FrontendFrameworkTodoTestLit extends LitElement {

  static get styles() {
    return css`

      main {
        flex-grow: 1;
      }

    `;
  }

  render() {
    return html`
      <main>
        <h1>ToDo using Lit</h1>
        <list-display></list-display>
      </main>
    `;
  }
}

