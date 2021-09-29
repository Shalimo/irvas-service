const tabs = (headerSelector, contentSelector, tabsSelector, activeClass) => {
    const header = document.querySelector(headerSelector);
    const content = document.querySelectorAll(contentSelector);
    const tabs = document.querySelectorAll(tabsSelector);

    function hideTabs() {
        content.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    function showTabs(i = 0) {
        content[i].style.display = 'block';
        tabs[i].classList.add(activeClass);
    }

    hideTabs();
    showTabs();

    header.addEventListener('click', (e) => {
        if (e.target && e.target.classList.contains(tabsSelector.replace(/\./, "")) || e.target.parentNode.classList.contains(tabsSelector.replace(/\./, ""))) {
            tabs.forEach((item, i) => {
                if (e.target == item || e.target.parentNode == item) {
                    hideTabs();
                    showTabs(i);
                }
            })
        }
    })
}

export default tabs;