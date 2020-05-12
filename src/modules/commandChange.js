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

export default commandChange;