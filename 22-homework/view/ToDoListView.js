class TodoListView {
    static TODO_ITEM_SELECTOR = '.todo-container';
    static DELETE_BTN_SELECTOR = '.delete-btn';
    static EDIT_BTN_SELECTOR = '.edit-btn';
    static todoList = document.querySelector('.todo_ul');

    #$listEl;
    #options;

    constructor(options) {
        this.#$listEl = $('<ul class="todo_ul"></ul>')
            .on('click', TodoListView.DELETE_BTN_SELECTOR, (e) => this.onDeleteBtnClick(e))
            .on('click', TodoListView.TODO_ITEM_SELECTOR, (e) => this.onTodoClick(e));

        this.#options = options;
    }

    onDeleteBtnClick(e) {
        e.stopPropagation();

        const id = this.getTodoItemId(e.target);

        this.#options.onDelete(id);
    }
    
    onTodoClick(e) {
        e.stopPropagation();
        
        const toDo = e.target;
        const id = this.getTodoItemId(toDo);
        if (toDo.classList.contains('done')) {
            this.#options.onTodo(id, false);
        } else {
            this.#options.onTodo(id, true);
        }
        
        toDo.classList.toggle('done')
    }

    getTodoItemId(el) {
        return el.closest(TodoListView.TODO_ITEM_SELECTOR)?.dataset.id;
    }

    appendTo($el) {
        $el.append(this.#$listEl);
    }

    renderList(list) {
        const html = list.map(todo => this.generateTodoHTML(todo)).join('');

        this.#$listEl.html(html);
    }

    generateTodoHTML(todo) {
        const statusClass = todo.status ? 'done' : '';

        return `
            <div class="todo-container ${statusClass}" data-id="${todo.id}""
                <li class="todo-item">
                    ${todo.title}
                    <div>
                        <button class="edit-btn">Edit</button>
                        <button class="delete-btn">Delete</button>
                    </div>
                </li>
        </div>
        `
        }
}