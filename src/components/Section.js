// export default class Section {
//     constructor({ items, renderer }, containerSelector){
//         this.__renderedItems = items;
//         this._renderer = renderer;

//         this._container = document.querySelector(containerSelector);
//     }

//     addItem(element) {
//         this._container.prepend(element);
//     }

//     renderItems() {
//         this.__renderedItems.forEach(item => {
//             this._renderer(item);
//         });
//     }
// }
export default class Section {
    constructor({ renderer }, containerSelector){
        this._renderer = renderer;
        this._container = document.querySelector(containerSelector);
    }

    createCards(data) {
        data.forEach((item) => {
            this._renderer(item)
        })
    }

    addItem(element) {
        this._container.prepend(element);
    }

}