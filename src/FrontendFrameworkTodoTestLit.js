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
    }

    render() 
    {
        return html`
            <main>
                <h1>ToDo using Lit</h1>
                <list-display 
                    title="Things To Do:"
                    items="${JSON.stringify(this.todo)}">
                </list-display>

                <form @submit="${this.submit_todo}">
                    <label for="add-todo">Add Todo:</label> 
                    <input type="text" id="add-todo-input" name="add-todo"><br><br>
                    <input type="submit" value="Submit">
                </form>
            </main>
        `;
    }

    submit_todo(e)
    {
        e.preventDefault();
        console.log("Submitted todo");
        let id = `todo-${this.todo.length + 1}`;
        let item = html`
            <list-item 
                item_id=${id} 
                item_text='todo-text go here'
            ></list-item>
        `;
        this.todo = [...this.todo, item];
    }

    mark_done(e)
    {
        console.log("Marked done");
        console.log(e);
    }
}

