const modals = (modalSelector, openButton, closeButton, closeByOverlay = true) => {
    const modal = document.querySelector(modalSelector);
    const openModalBtn = document.querySelectorAll(openButton);
    const closeModalBtn = document.querySelectorAll(closeButton);
    const modals = document.querySelectorAll('[data-modal]');
    const submitButtons = document.querySelectorAll('[name="submit"]');
    scroll = calcScroll();

    function calcScroll() {
        const div = document.createElement('div');
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visibility = 'hidden';

        document.body.appendChild(div);

        const scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();

        return scrollWidth;
    }

    function hideAllModals() {
        modals.forEach(item => {
            item.style.display = 'none';
            document.body.style.marginRight = `0px`
        });
    }

    function showModals() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`
    }

    function hideModals() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`
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
            hideAllModals();
            hideModals();
        })
    })

    modal.addEventListener('click', (e) => {
        if (e.target === modal && closeByOverlay) {
            hideAllModals();
            hideModals();
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            hideAllModals();
            hideModals();
        }
    })

    submitButtons.forEach(item => {
        item.addEventListener('click', () => {
            setTimeout(hideModals, 2000);
        })
    })

    function showModalByTime(selector, time) {
        const modal = document.querySelector(selector);
            setTimeout(function() {
                modal.classList.add('show');
                modal.classList.remove('hide');
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = `${scroll}px`
        }, time)
    }

    showModalByTime('.popup', 60000);

};

export default modals;