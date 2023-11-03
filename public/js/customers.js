const buttonsDelete = document.querySelectorAll('.btn-delete-customer');

buttonsDelete.forEach((btn) => {
    btn.addEventListener('click', async () => {
        const confirm = window.confirm('Você realmente deseja excluir?');

        if (confirm) {
            console.log(`Id customer: ${btn.dataset.idcustomer}`);

            const apiURL = `/admin/customers/delete/${btn.dataset.idcustomer}`;
            const requestOptions = {
                method: 'DELETE'        
            };

            await fetch(apiURL, requestOptions);
            window.location.reload(true);
        } else {
            console.log('Exclusão cancelada!');
        }
    });
});