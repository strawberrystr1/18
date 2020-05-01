
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

        // btnMenu.addEventListener('click', handlerMenu);

        menu.addEventListener('click', event => {
            const target = event.target;
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

        popup.addEventListener('click', event => {
            let target = event.target;
            if (target.classList.contains('.popup-close')) {
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
            if (target) {
                tab.forEach((elem, i) => {
                    if (elem === target) {
                        toogleTabContent(i);
                    }
                });
            }

        });
    };


    //slider

    const slider = () => {

        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            portfolioDots = document.querySelector('.portfolio-dots');

        const createLi = () => {
            const li = document.createElement("li");
            li.classList.add('dot');
            portfolioDots.insertAdjacentElement("beforeend", li);
        };

        for (let i = 0; i < slide.length; i++) {
            createLi();
        }

        const slider = document.querySelector('.portfolio-content'),
            dot = document.querySelectorAll('.dot');

        dot[0].classList.add('dot-active');

        let currentSlide = 0;
        let interval;
        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 3000) => {

            interval = setInterval(autoPlaySlide, time);

        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', event => {

            event.preventDefault();

            const target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, i) => {
                    if (elem === target) {
                        currentSlide = i;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        });

        slider.addEventListener('mouseover', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', event => {
            if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(2000);

    };

    //command

    const commandChange = () => {

        const images = document.querySelectorAll('.command__photo');

        images.forEach(item => {
            const img = item.src;
            item.addEventListener('mouseenter', event => {
                event.target.src = event.target.dataset.img;
            });

            item.addEventListener('mouseleave', () => {
                event.target.src = img;
            });
        });


    };

    //calculate

    const calcalute = () => {

        const calcItems = document.querySelectorAll('input[type=number]');
        console.log('calcItems: ', calcItems);

        calcItems.forEach(item => {

            item.removeAttribute('type');
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });

        });



    };

    //калькулятор

    const calculator = (price = 100) => {

        const calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcDay = document.querySelector('.calc-day'),
            calcCount = document.querySelector('.calc-count'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value;
            const squareValue = +calcSquare.value;

            if (calcCount.value > 1) {
                countValue += (calcCount.vqlue - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5) {
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10) {
                dayValue *= 1.5;
            }

            if (typeValue && squareValue) {
                total = price * typeValue * squareValue * countValue * dayValue;
            }

            totalValue.textContent = total;
        };

        calcBlock.addEventListener('change', event => {
            const target = event.target;

            if (target.matches('.calc-type') || target.matches('.calc-square') ||
            target.matches('.calc-day') || target.matches('.calc-count')) {
                countSum();
            }


        });

    };


    calculator(100);
    calcalute();
    commandChange();
    slider();
    tabs();
    tooglePopup();
    toogleMenu();
    countTimer('26 april 2020');

});
