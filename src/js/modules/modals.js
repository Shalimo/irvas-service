const modals = (modalSelector, openButton, closeButton) => {
    const modal = document.querySelector(modalSelector);
    const openModalBtn = document.querySelectorAll(openButton);
    const closeModalBtn = document.querySelectorAll(closeButton);

    function showModals() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    function hideModals() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    openModalBtn.forEach(item => {
        item.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }
            showModals();
        })
    })

    closeModalBtn.forEach(item => {
        item.addEventListener('click', () => {
            hideModals();
        })
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModals();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideModals();
        }
    })

    function showModalByTime(selector, time) {
        const modal = document.querySelector(selector);
            setTimeout(function() {
                modal.classList.add('show');
                modal.classList.remove('hide');
        }, time)
    }

    showModalByTime('.popup', 60000);

};

export default modals;