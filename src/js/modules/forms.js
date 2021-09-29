const forms = () => {

    const form = document.querySelectorAll('form');
    const inputs = document.querySelectorAll('input');
    const numInputs = document.querySelectorAll('input[name="user_phone"]');

    numInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/[^\d]/g, '');
        })
    })

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