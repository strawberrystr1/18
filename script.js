
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
            menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);

        menu.addEventListener('click', (event) => {
            let target = event.target;
            if (target) {
                handlerMenu();
            }
        });
    };

    //Pop UP

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

        popup.addEventListener('click', (event) => {
            let target = event.target;
            if(target.classList.contains('.popup-close')) {
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


    // Tabs

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = document.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toogleTabContent = index => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tabContent[i].classList.add('d-none');
                    tab[i].classList.remove('active');
                }
            }
        };
        tabHeader.addEventListener('click', event => {
            let target = event.target;
            target = target.closest('.service-header-tab');
            console.log(target);
            if (target) {
                tab.forEach((elem, i) => {
                    if (elem === target) {
                        toogleTabContent(i);
                    }
                });
            }

        });
    };

    tabs();
    tooglePopup();
    toogleMenu();
    countTimer('26 april 2020');

});
