
'use strict';
window.addEventListener('DOMContentLoaded', () => {


    //Timer
    function countTimer(deadline) {
        const timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            const dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 3600);
            return {
                hours,
                minutes,
                seconds,
                timeRemaining
            };
        }

        function makeMeTwoDigits(n) {
            return (n < 10 ? "0" : "") + n;
        }

        function updateClock() {
            const timer = getTimeRemaining();
            timerHours.textContent = makeMeTwoDigits(timer.hours);
            timerMinutes.textContent = makeMeTwoDigits(timer.minutes);
            timerSeconds.textContent = makeMeTwoDigits(timer.seconds);
        }

        function interval() {
            const timer = getTimeRemaining();
            let idInterval;
            if (timer.timeRemaining > 0) {
                idInterval = setInterval(updateClock, 1000);
            } else {
                clearInterval(idInterval);
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
            }
        }
        interval();
    }

    //Menu
    const toogleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);

        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach(elem => elem.addEventListener('click', handlerMenu));
    };

    //Pop UP

    const tooglePopup = () => {
        const popup = document.querySelector('.popup'),
            popupBtn = document.querySelectorAll('.popup-btn'),
            popupClose = document.querySelector('.popup-close'),
            popupContent = document.querySelector('.popup-content');
        console.log(popup);

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

        popupClose.addEventListener('click', () => {
            popup.style.display = 'none';
            count = 0;
        });


    };

    tooglePopup();
    toogleMenu();
    countTimer('26 april 2020');

});
