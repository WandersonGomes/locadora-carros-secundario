const btnSearchCustomer = document.getElementById('btn-search-customer');
const btnSearchCar = document.getElementById('btn-search-car');
const btnRental = document.getElementById('btn-rental');

const idCustomerInput = document.getElementById('id_customer');
const nameInput = document.getElementById('name');
const lastnameInput = document.getElementById('lastname');
const cpfInput = document.getElementById('cpf');
const rgInput = document.getElementById('rg');

const idCarInput = document.getElementById('id_car');
const plateInput = document.getElementById('plate');
const modelInput = document.getElementById('model');
const yarInput = document.getElementById('year');
const yearModelInput = document.getElementById('year_model');
const renavamInput = document.getElementById('renavam');
const chassiInput = document.getElementById('chassi');
const motorInput = document.getElementById('motor');
const crvInput = document.getElementById('crv');


btnSearchCustomer.addEventListener('click', async () => {
    const cpf_customer = cpfInput.value;
    
    if (cpf_customer) {
        try {
            const apiURL = '/admin/customers/get_customer/' + cpf_customer;
            const optionsRequest = {
                method: 'POST'
            };
            const response = await fetch(apiURL, optionsRequest);

            if (!response.ok) {
                console.error(response.error);
            } else {
                const customer = await response.json();
                
                idCustomerInput.value = customer.id;
                nameInput.value = customer.name;
                lastnameInput.value = customer.lastName;
                cpfInput.value = customer.cpf;
                rgInput.value = customer.rg;

                console.log(customer);
            }
        } catch (error) {
            console.error('Ocorreu um erro:', error);
        }
    }
});

btnSearchCar.addEventListener('click', async () => {
    const plate = plateInput.value;

    if (plate) {
        try {
            const apiURL = '/admin/cars/get_car/' + plate;
            const optionsRequest = {
                method: 'POST'
            };
            const response = await fetch(apiURL, optionsRequest);

            if (!response.ok) {
                console.error(response.error);
            } else {
                const car = await response.json();
                
                idCarInput.value = car.id;
                plateInput.value = car.plate;
                modelInput.value = car.model;
                yarInput.value = car.year;
                yearModelInput.value = car.yearModel;
                renavamInput.value = car.renavam;
                chassiInput.value = car.chassi;
                motorInput.value = car.motor;
                crvInput.value = car.crv;

                console.log(car);
            }
        } catch (error) {
            console.error('Ocorreu um erro: ', error);
        }
    }
});

btnRental.addEventListener('click', async (req, res) => {
    try {
        const apiURL = '/admin/rentals/add/' + idCustomerInput.value + '/' + idCarInput.value;
        console.log(apiURL);
        const optionsRequest = {
            method: 'POST'
        };
        const response = await fetch(apiURL, optionsRequest);
        console.log(response);
        window.location.reload();
    } catch (error) {
        console.error('Ocorreu um erro: ', error);
    }
});