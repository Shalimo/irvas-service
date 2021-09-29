import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';

window.addEventListener('DOMContentLoaded' , () => {
    modals('.popup_engineer', '#modal_btn', '[data-close]');
    modals('.popup', '.phone_link', '[data-close]');
    tabs('.glazing_slider', '.glazing_content', '.glazing_block', 'active');
    tabs('.decoration_slider', '.decoration_content > div > div', '.no_click', 'after_click');
});
