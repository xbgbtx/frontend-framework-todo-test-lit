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
            },
            done : {
                type: Array,
            },
        };
    }

    constructor()
    {
        super ();
        this.todo=[];
        this.done=[];
        this.addEventListener('done', e => console.log(e));
        this.id_count = 0;
    }

    render() 
    {
        let submit_handler = e =>
        {
            let todo_input = this.shadowRoot.getElementById("add-todo-input").value;
            this.add_todo(todo_input);
            e.preventDefault();
        };

        return html`
            <main>
                <h1>ToDo using Lit</h1>
                ${this.list_html("Todo", "Mark Done", id => this.mark_done(id), this.todo)}
                ${this.list_html("Done", "Delete", id => this.delete(id), this.done)}

                <form @submit=${submit_handler}>
                    <label for="add-todo">Add Todo:</label> 
                    <input 
                        type="text" 
                        id="add-todo-input" 
                        name="add-todo"
                    ><br><br>
                    <input type="submit" value="Submit">
                </form>
            </main>
        `;
    }

    list_html(list_name, button_text, button_cb, items)
    {
        let list_gen = _ =>
        {
            let text_list = items.map(i => 
                html`
                    <li>
                        <span>${i.text}</span>
                        <button
                            @click=${e => button_cb(i.id)}
                        >
                            ${button_text}
                        </button>
                    </li>`
            );
            return html`<ul>${text_list}</ul>`;
        };

        return html`
            <h2>${list_name}:</h2>
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

        if(text.length <= 0 )
            return;

        let item = {
            text : text,
            id : this.make_unique_id ()
        };

        this.todo = [ ...this.todo, item ];
    }

    mark_done(id)
    {
        console.log(`Mark Done: ${id}`);

        let item = this.todo.reduce ( ( prev, curr ) => curr.id == id ? curr : prev );

        if ( item == null )
            return;

        this.todo = this.todo.filter ( i => i.id != item.id );

        this.done = [ ...this.done, item ];
    }

    delete(id)
    {
        console.log(`Delete: ${id}`);
        this.done = this.done.filter ( i => i.id != id );
    }
}

