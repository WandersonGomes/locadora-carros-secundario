const buttonsDelete = document.querySelectorAll('.btn-delete-customer');

buttonsDelete.forEach(async (btn) => {
    btn.addEventListener('click', async () => {
        const confirm = window.confirm('Você realmente deseja excluir?');

        if (confirm) {
            const apiURL = `/admin/customers/delete/${btn.dataset.idcustomer}`;
            const requestOptions = {
                method: 'DELETE'
            };

            await fetch(apiURL, requestOptions)
            window.location.reload();
        }
    });
});
