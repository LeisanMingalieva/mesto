(()=>{"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,r){if("object"!==e(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===e(i)?i:String(i)),o)}var i}var r=function(){function e(t,r,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=t.name,this._link=t.link,this._templateSelector=r,this._handleCardClick=n}var r,n;return r=e,(n=[{key:"_getTemplate",value:function(){var e=document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0);return this._like=e.querySelector(".card__like"),this._delete=e.querySelector(".card__delete"),this._image=e.querySelector(".card__image"),this._cardName=e.querySelector(".card__name"),e}},{key:"generatedCard",value:function(){return this._element=this._getTemplate(),this._setEventListeners(),this._image.src=this._link,this._image.alt=this._name,this._cardName.textContent=this._name,this._element}},{key:"_handleLikeCardClick",value:function(){this._like.classList.toggle("card__like_active")}},{key:"_handleDeleteCardClick",value:function(){this._element.remove()}},{key:"_setEventListeners",value:function(){var e=this;this._like.addEventListener("click",(function(){e._handleLikeCardClick()})),this._delete.addEventListener("click",(function(){e._handleDeleteCardClick()})),this._image.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&t(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),e}(),n=(document.querySelectorAll(".popup"),document.querySelector(".profile__avatar-container")),o=document.querySelector(".popup_type_avatar").querySelector(".popup__form-container"),i=document.querySelector(".profile__edit"),u=document.querySelector(".popup_type_profile").querySelector(".popup__form-container"),a=document.querySelector(".popup__form-item_el_name"),c=document.querySelector(".popup__form-item_el_job"),l=(document.querySelector(".profile__name"),document.querySelector(".profile__text"),document.querySelector(".profile__add")),s=document.querySelector(".popup_type_card").querySelector(".popup__form-container"),f=(document.querySelector(".popup__form-item_el_place"),document.querySelector(".popup__form-item_el_link"),document.querySelector(".popup_type_image"),document.querySelector(".popup__image"),document.querySelector(".popup__image-title"),document.querySelector(".cards"),{formSelector:".popup__form-container",inputSelector:".popup__form-item",errorClass:"popup__form-item_type_error",buttonSelector:".popup__form-save",buttonDisabledClass:"popup__form-save_disabled",errorSelector:".popup__form-item-error"});function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==p(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===p(o)?o:String(o)),n)}var o}const m=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._errorClass=t.errorClass,this._buttonSelector=t.buttonSelector,this._buttonDisabledClass=t.buttonDisabledClass,this._errorSelector=t.errorSelector,this._formElement=r,this._buttonSubmit=this._formElement.querySelector(this._buttonSelector),this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector))}var t,r;return t=e,(r=[{key:"enableValidation",value:function(){this._formElement.addEventListener("submit",this._disableSubmit),this._addInputListener(),this.toggleButton()}},{key:"_disableSubmit",value:function(e){e.preventDefault()}},{key:"_showInputError",value:function(e,t){e.classList.add(this._errorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._errorClass),t.textContent=""}},{key:"_handleFormInput",value:function(e){var t=e.target,r=t.id,n=this._formElement.querySelector("#".concat(r,"-error"));t.validity.valid?this._hideInputError(t,n):this._showInputError(t,n)}},{key:"toggleButton",value:function(){var e=this._formElement.checkValidity();this._buttonSubmit.disabled=!e,this._buttonSubmit.classList.toggle(this._buttonDisabledClass,!e)}},{key:"_addInputListener",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(t){e._handleFormInput(t),e.toggleButton()}))}))}}])&&y(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==b(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===b(o)?o:String(o)),n)}var o}var h=function(){function e(t,r){var n=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=n,this._container=document.querySelector(r)}var t,r;return t=e,(r=[{key:"createCards",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,S(n.key),n)}}function S(e){var t=function(e,t){if("object"!==d(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==d(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===d(t)?t:String(t)}var g=function(){function e(t){var r,n,o,i=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){"Escape"===e.key&&i.close()},(n=S(n="_handleEscClose"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this._popup=document.querySelector(t)}var t,r;return t=e,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&_(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==w(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===w(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},E.apply(this,arguments)}function j(e,t){return j=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},j(e,t)}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(n);if(o){var r=P(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===w(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupImageTitle=t._popup.querySelector(".popup__image-title"),t}return t=u,(r=[{key:"open",value:function(e,t){E(P(u.prototype),"open",this).call(this),this._popupImage.src=t,this._popupImage.alt=e,this._popupImageTitle.textContent=e}}])&&k(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function q(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===C(o)?o:String(o)),n)}var o}function L(){return L="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(arguments.length<3?e:r):o.value}},L.apply(this,arguments)}function T(e,t){return T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},T(e,t)}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var R=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(u,e);var t,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(n);if(o){var r=I(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return function(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,e)});function u(e,t){var r,n=t.handleSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(r=i.call(this,e))._handleSubmitForm=n,r._form=r._popup.querySelector(".popup__form-container"),r._inputList=r._form.querySelectorAll(".popup__form-item"),r}return t=u,(r=[{key:"close",value:function(){this._form.reset(),L(I(u.prototype),"close",this).call(this)}},{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;L(I(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmitForm(e._getInputValues()),e.close()}))}}])&&q(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(g);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function D(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==A(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var x=function(){function e(t){var r=t.userNameSelector,n=t.userJobSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(r),this._userJob=document.querySelector(n),this._avatar=document.querySelector(o)}var t,r;return t=e,(r=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,about:this._userJob.textContent}}},{key:"setUserInfo",value:function(e){this._userName.textContent=e.name,this._userJob.textContent=e.about}},{key:"setUserAvatar",value:function(e){this._avatar.style.backgroundImage="url(".concat(e,")")}}])&&D(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function U(e){return U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},U(e)}function B(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,N(n.key),n)}}function N(e){var t=function(e,t){if("object"!==U(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!==U(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"===U(t)?t:String(t)}var F=new(function(){function e(t){var r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=this,o=function(e){return e.ok?e.json():Promise.reject("Ой, ошибка ".concat(e.status))},(n=N(n="_checkResponse"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,this.url=t.url,this.headers=t.headers}var t,r;return t=e,(r=[{key:"getInitialCards",value:function(){return fetch("".concat(this.url,"/cards"),{method:"GET",headers:this.headers}).then(this._checkResponse)}},{key:"getUserData",value:function(){return fetch("".concat(this.url,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkResponse)}},{key:"setUserData",value:function(e){return fetch("".concat(this.url,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:e.name,about:e.about})}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.url,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}}])&&B(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-64",headers:{authorization:"96b297f0-a85f-4378-98b7-30ead3538e01","Content-Type":"application/json"}}),V=new O(".popup_type_image"),J=new x({userNameSelector:".profile__name",userJobSelector:".profile__text",avatarSelector:".profile__avatar"}),G=new R(".popup_type_profile",{handleSubmitForm:function(e){F.setUserData(e).then((function(e){J.setUserInfo(e),Y[u.getAttribute("name")].toggleButton()}))}}),H=new R(".popup_type_card",{handleSubmitForm:function(e){Q(e)}}),z=new R(".popup_type_avatar",{handleSubmitForm:function(e){F.setUserAvatar(e).then((function(e){J.setUserAvatar(e.avatar)})),Y[o.getAttribute("name")].toggleButton()}}),M=function(e){return e.id,new r(e,"#cards-template",K).generatedCard()},K=function(e,t){V.open(e,t)},Q=function(e){var t=M(e);W.addItem(t)},W=new h({renderer:function(e){W.addItem(M(e))}},".cards");F.getUserData().then((function(e){J.setUserInfo(e)})),F.getInitialCards().then((function(e){W.createCards(e)}));var X=document.querySelectorAll(".popup__form-container"),Y={};X.forEach((function(e){var t=new m(f,e);Y[e.getAttribute("name")]=t,t.enableValidation()})),i.addEventListener("click",(function(){G.open();var e=J.getUserInfo();a.value=e.name,c.value=e.about,Y[u.getAttribute("name")].toggleButton()})),l.addEventListener("click",(function(){H.open(),Y[s.getAttribute("name")].toggleButton()})),n.addEventListener("click",(function(){z.open(),Y[o.getAttribute("name")].toggleButton()})),V.setEventListeners(),H.setEventListeners(),G.setEventListeners(),z.setEventListeners()})();