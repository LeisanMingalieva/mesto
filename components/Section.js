export default class Section {
    constructor({ items, renderer }, containerSelector){
        this.__renderedItems = items;
        this._renderer = renderer;

        this._container = document.querySelector(containerSelector);
    }

    addItem(element) {
        this._container.prepend(element);
    }

    renderItems() {
        this.__renderedItems.forEach(item => {
            this._renderer(item);
        });
    }
}