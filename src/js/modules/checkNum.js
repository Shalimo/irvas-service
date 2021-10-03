const checkNum = (selector) => {

    const selectorInputs = document.querySelectorAll(selector);

    selectorInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^\d]/g, '');
        })
    })
}

export default checkNum;