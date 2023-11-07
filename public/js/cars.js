const buttonsDelete = document.querySelectorAll('.btn-delete-car');

buttonsDelete.forEach(async (btn) => {
    btn.addEventListener('click', async () => {
        const confirm = window.confirm('Você realmente deseja excluir?');

        if (confirm) {
            const apiURL = `/admin/cars/delete/${btn.dataset.idcar}`;
            const requestOptions = {
                method: 'DELETE'
            };

            await fetch(apiURL, requestOptions)
            window.location.reload();
        }
    });
});
