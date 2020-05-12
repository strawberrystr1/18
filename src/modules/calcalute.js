
    const calcalute = () => {

        const calcItems = document.querySelectorAll('input[type=number]');

        calcItems.forEach(item => {

            item.removeAttribute('type');
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });

        });
    };

    export default calcalute;