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

export default tabs;