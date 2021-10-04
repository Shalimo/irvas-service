const changeImageSize = () => {
    const imgBlock = document.createElement('div');
    const imgSection = document.querySelector('.works');
    const bigImg = document.createElement('img');

    imgBlock.classList.add('popup');
    imgSection.appendChild(imgBlock);

    imgBlock.style.justifyContent = 'center';
    imgBlock.style.alignItems = 'center';
    imgBlock.style.display = 'none';

    imgBlock.appendChild(bigImg);

    imgSection.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target && e.target.classList.contains('preview')) {
            imgBlock.style.display = 'flex';
            const path = e.target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
            document.body.style.overflow = 'hidden';
        }

        if (e.target && e.target.matches('div.popup')) {
            imgBlock.style.display = 'none';
            document.body.style.overflow = '';
        }
    })
};

export default changeImageSize;