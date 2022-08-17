class Collection {
    #list = [];
    fetch() {
        return TodoApi.getList().then((list) => {
            this.setList(list);
        })
    }

    update(id, status) {
        this.#list.find(e => e.id).status = status;
        
        TodoApi.update(id, status);
    }


    setList(list) {
        this.#list = list;
    }

    getList() {
        return this.#list;
    }

    add(todo) {
        this.#list.push(todo);
    }

    find(id) {
        return this.#list.find(c => c.id === id);
    }

    delete(id) {
        this.#list = this.#list.filter(item => item.id !== id);

        TodoApi.delete(id);

        return Promise.resolve();
    }
}