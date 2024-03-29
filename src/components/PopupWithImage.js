import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImage = this._popup.querySelector('.popup__image')
        this._popupImageTitle = this._popup.querySelector('.popup__image-title')
    }

    open(title, link) {
        super.open();
        this._popupImage.src = link;
        this._popupImage.alt = title;
        this._popupImageTitle.textContent = title;        
    }
}