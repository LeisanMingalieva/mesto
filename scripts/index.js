/*открытие и закрытие popup*/
const editButton = document.querySelector('.profile__editButton')
const popup = document.querySelector('.popup')
const closeButton = popup.querySelector('.popup__close')

const handleeditButtonClick = () => (
    popup.classList.add('popup_opened')
)

const handlecloseButtonClick = () => (
    popup.classList.remove('popup_opened')
)

editButton.addEventListener('click', handleeditButtonClick)
closeButton.addEventListener('click', handlecloseButtonClick)

/*сoхранение данных в формах*/
let formElement = document.querySelector('.popup__container');
let nameInput = document.querySelector('.popup__input_name');
let jobInput = document.querySelector('.popup__input_job');




function handleFormSubmit (evt) {
    evt.preventDefault();

    nameInput = document.querySelector('.popup__input_name').value;
    jobInput = document.querySelector('.popup__input_job').value;
    
    let ProfileName = document.querySelector(".profile__name");
    let ProfileJob = document.querySelector(".profile__text");

    ProfileName.textContent = nameInput;
    ProfileJob.textContent = jobInput;
   
    handlecloseButtonClick();   
}

formElement.addEventListener('submit', handleFormSubmit);