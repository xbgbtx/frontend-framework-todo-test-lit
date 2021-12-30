import { LitElement, html, css } from 'lit';

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
        this.id_count = 0;
        this.todo_input = "";
    }

    render() 
    {
        let submit_handler = e =>
        {
            this.add_todo(this.todo_input);
            e.preventDefault();
        };

        return html`
            <main>
                <h1>ToDo using Lit</h1>
                ${this.list_html("Todo",this.todo)}

                <form @submit=${submit_handler}>
                    <label for="add-todo">Add Todo:</label> 
                    <input 
                        type="text" 
                        id="add-todo-input" 
                        name="add-todo"
                        value="${this.todo_input}"
                        @change=${e => this.todo_input = e.target.value}
                    ><br><br>
                    <input type="submit" value="Submit">
                </form>
            </main>
        `;
    }

    list_html(list_name, items)
    {
        let list_gen = _ =>
        {
            let text_list = items.map(i => html`<li>i.text</li>`);
            return html`<ul>${text_list}</ul>`;
        };

        return html`
            ${ items.length > 0 ? list_gen(items) : html`<p>No items.</p>` }
        `;
    }

    make_unique_id()
    {
        return this.id_count++;
    }

    add_todo(text)
    {
        console.log(`Add: ${text}`);

        let item = {
            text : text,
            id : this.make_unique_id ()
        };

        this.todo.push(item);
    }
}

