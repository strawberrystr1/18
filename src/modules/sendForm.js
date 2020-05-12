const sendForm = () => {

    const errorMessage = 'Что то пошло не так',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо! Мы скоро свяжемся';

    const form = document.getElementById('form1'),
        formPopup = document.getElementById('form3'),
        popupDiv = document.querySelector('.popup-content'),
        formConnect = document.getElementById('form2'),
        phone = document.querySelectorAll('.form-phone'),
        name = document.querySelectorAll('.form-name'),
        formConnectName = document.getElementById('form2-name'),
        formConnectComment = document.getElementById('form2-message');


    formConnect.addEventListener('input', () => {
        const formConnectNameText = formConnectName.value;
        formConnectName.value = formConnectNameText.replace(/[^а-яё\s]/gi, '');
        const formConnectCommentText = formConnectComment.value;
        formConnectComment.value = formConnectCommentText.replace(/[^а-яё\s]/gi, '');
    });



    name.forEach(item => {
        item.addEventListener('input', () => {
            const text = item.value;
            item.value = text.replace(/[^а-яё\s]/gi, '');
        });
    });

    phone.forEach(item => {
        item.addEventListener('input', () => {
            const text = item.value;
            item.value = text.replace(/[^\+\d]/g, '');
        });
    });

    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    const postData = (body, clear) =>
        fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

    form.addEventListener('submit', event => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        const body = {};

        for (const val of formData.entries()) {
            body[val[0]] = val[1];
        }
        postData(body,  () => {
            for (const item of form) {
                item.value = '';
            }
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Status network not 200');
                }
                statusMessage.textContent = successMessage;
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    });

    formPopup.addEventListener('submit', event => {
        event.preventDefault();
        statusMessage.style.color = 'white';
        popupDiv.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(formPopup);
        const body = {};

        for (const val of formData.entries()) {
            body[val[0]] = val[1];
        }
        postData(body, () => {
            for (const item of formPopup) {
                item.value = '';
            }
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Status network not 200');
                }
                statusMessage.textContent = successMessage;
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    });

    formConnect.addEventListener('submit', event => {
        event.preventDefault();
        formConnect.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(formConnect);
        const body = {};

        for (const val of formData.entries()) {
            body[val[0]] = val[1];
        }
        postData(body,  () => {
            for (const item of formConnect) {
                item.value = '';
            }
        })
            .then(response => {
                if (response.status !== 200) {
                    throw new Error('Status network not 200');
                }
                statusMessage.textContent = successMessage;
            })
            .catch(error => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
    });


};

export default sendForm;