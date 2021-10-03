import checkNum from "./checkNum";

const changeModalState = (state) => {

    const tabs = document.querySelectorAll('.balcon_icons_img');
    const width = document.querySelector('#width');
    const height = document.querySelector('#height');

    checkNum('#width');
    checkNum('#height');

    function bindActions(elem, action, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(action, () => {
                state[prop] = i;
                console.log(state);
            })
        });
    }

    bindActions(tabs, 'click', 'form');

}

export default changeModalState;