import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calculator from './modules/calculator';

window.addEventListener('DOMContentLoaded' , () => {
    modals('.popup_engineer', '#modal_btn', '[data-close]');
    modals('.popup', '.phone_link', '[data-close]');
    modals('.popup_calc', '.glazing_price_btn', '.popup_calc_close');
    tabs('.glazing_slider', '.glazing_content', '.glazing_block', 'active');
    tabs('.decoration_slider', '.decoration_content > div > div', '.no_click', 'after_click');
    tabs('.balcon_icons', '[data-btn-img]', '.balcon_icons_img', 'do_image_more', 'inline-block');
    forms();
    calculator();
    
});
