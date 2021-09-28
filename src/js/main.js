import './slider';
import modals from './modules/modals';

window.addEventListener('DOMContentLoaded' , () => {
    modals('.popup_engineer', '#modal_btn', '[data-close]');
    modals('.popup', '.phone_link', '[data-close]');
});
