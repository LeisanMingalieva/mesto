import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popupSelector.querySelector('.popup__image')
        this._popupImageTitle = this._popupSelector.querySelector('.popup__image-title')
    }

    open(name, link) {
        super.open();
        this._popupImage.src = link;
        this._popupImageTitle.alt = name;
        this._popupImageTitle.textContent = name;        
    }
}