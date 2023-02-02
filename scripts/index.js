/*открытие и закрытие popup*/
const editButton = document.querySelector('.profile__edit')
const popup = document.querySelector('.popup')
const closeButton = popup.querySelector('.popup__close')
let formElement = document.querySelector('.popup__form-container');
let nameInput = document.querySelector('.popup__form-item_el_name');
let jobInput = document.querySelector('.popup__form-item_el_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__text');

const handleEditButtonClick = () => {
    popup.classList.add('popup_opened')
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}    

const handleCloseButtonClick = () => {
    popup.classList.remove('popup_opened')
}
    
editButton.addEventListener('click', handleEditButtonClick)
closeButton.addEventListener('click', handleCloseButtonClick)

/*сoхранение данных в формах*/
function handleFormSubmit (evt) {
    evt.preventDefault();

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
   
    popup.classList.remove('popup_opened')
}

formElement.addEventListener('submit', handleFormSubmit);