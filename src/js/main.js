import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import calculator from './modules/calculator';
import changeModalState from './modules/changeModalState';

window.addEventListener('DOMContentLoaded' , () => {
    "use strict";

    const modalState = {};

    changeModalState(modalState);
    modals('.popup_engineer', '#modal_btn', '[data-close]');
    modals('.popup', '.phone_link', '[data-close]');
    modals('.popup_calc', '.glazing_price_btn', '.popup_calc_close');
    modals('.popup_calc_profile', '.popup_calc_button', '.popup_calc_profile_close', false);
    modals('.popup_calc_end', '.popup_calc_profile_button', '.popup_calc_end_close', false);
    tabs('.glazing_slider', '.glazing_content', '.glazing_block', 'active');
    tabs('.decoration_slider', '.decoration_content > div > div', '.no_click', 'after_click');
    tabs('.balcon_icons', '[data-btn-img]', '.balcon_icons_img', 'do_image_more', 'inline-block');
    forms(modalState);
    calculator();
    
});
