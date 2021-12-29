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
        <list-display title="Things To Do:"></list-display>

        <form @submit="${this.submit_todo}">
            <label for="add-todo">Add Todo:</label> 
            <input type="text" id="add-todo" name="add-todo"><br><br>
            <input type="submit" value="Submit">
        </form>
      </main>
    `;
  }

    submit_todo(e)
    {
        e.preventDefault();
        console.log("Submitted todo");
    }
}

