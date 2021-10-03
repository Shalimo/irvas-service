import checkNum from "./checkNum";

const changeModalState = (state) => {

    const tabs = document.querySelectorAll('.balcon_icons_img');
    const width = document.querySelectorAll('#width');
    const height = document.querySelectorAll('#height');
    const type = document.querySelectorAll('#view_type');
    const checkBoxProfile = document.querySelectorAll('.checkbox');

    checkNum('#width');
    checkNum('#height');

    function bindActions(elem, action, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(action, () => {
                switch(item.nodeName) {
                    case 'SPAN' :
                        state[prop] = i;
                        break;
                    case 'INPUT' :
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = "Холодное" : state[prop] = "Теплое";
                            elem.forEach((checkbox, j) => {
                                checkbox.checked = false;
                                if (i == j) {
                                    checkbox.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT' :
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            })
        });
    }

    bindActions(tabs, 'click', 'form');
    bindActions(width, 'input', 'width');
    bindActions(height, 'input', 'height');
    bindActions(type, 'change', 'type');
    bindActions(checkBoxProfile, 'change', 'profile');

}

export default changeModalState;