const btnSave = document.getElementById('btn-save');
const form = document.querySelector('.needs-validation');

btnSave.addEventListener('click', (event) => {
    if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
    }

    form.classList.add('was-validated');
}, false);