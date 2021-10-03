import checkNum from "./checkNum";

const forms = (state) => {

    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');

    checkNum('input[name="user_phone"]');

    const message = {
        loading: 'Загрузка...',
        failure: 'Что-то пошло не так',
        success: 'Спасибо, введенные данные отправлены'
    }

    const postData = async (url, data) => {
        let result = await fetch(url, {
            method: 'POST',
            body: data
        })

        return await result.text();
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === 'end') {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    inputs.forEach(item => item.value = "");
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 3000)
                });

        })
    })
}

export default forms;