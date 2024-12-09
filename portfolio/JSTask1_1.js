
function closeTheWindow () {
    let window = document.querySelector('.js-modal');
    window.classList.remove("open");
}

function openTheWindow () {
    let window = document.querySelector('.js-modal');
    window.querySelector('.modal__input-description').value = '';
    window.classList.add('open');
    
}

function addNewProject () {
    let window = document.querySelector('.js-modal');
    projectName = window.querySelector('.modal__input-name').value ;
    projectDescription = window.querySelector('.modal__input-description').value;
    addProjectCard(projectName, projectDescription);
    closeTheWindow();
    window.querySelector('.modal__input-description').value = '';
    window.querySelector('.modal__input-name').value = '';
}

function addProjectCard (name, description) {
    let cardList = document.querySelector('.third-section__card-list');
    if (name === '') name = "Работа " + (cardList.childElementCount + 1);
    if (description === '') description = "Краткое описание работы";
    photoNumber = cardList.childElementCount%3+1;
    photoRoute = "CSSstyles\\sectionSecondImage" + photoNumber + ".jpg";
    cardList.innerHTML += ` <div class = "third-section__card">
                        <div class =  "third-section__image-box">
                            <img src = "${photoRoute}" class = "third-section__image">
                        </div>
                        <div class = "third-section__text-box">
                            <div class = "third-section__card-title">${name}</div>
                            <div class = "third-section__card-description">${description}</div>
                        </div>
                    </div>`;
                    
}

