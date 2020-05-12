const tooglePopup = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');
    let animateInterval,
        count = 0;
    const animatePopup = function() {
        animateInterval = requestAnimationFrame(animatePopup);
        count++;
        popup.style.display = 'block';
        popupContent.style.left = `0%`;
        popupContent.style.left = `${count}%`;
        if (popupContent.style.left === `38%`) {
            cancelAnimationFrame(animateInterval);
        }
    };

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popupContent.style.left = `0`;
            if (document.documentElement.clientWidth > 768) {
                animatePopup();
            } else {
                popup.style.display = 'block';
            }
        });
    });

    popup.addEventListener('click', event => {
        let target = event.target;
        if (target.classList.contains('popup-close')) {
            popup.style.display = 'none';
            count = 0;
        } else {
            target = target.closest('.popup-content');
            if (!target) {
                popup.style.display = 'none';
                count = 0;
            }
        }

    });


};

export default tooglePopup;