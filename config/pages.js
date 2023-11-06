class ConfigurationPage {
    constructor(title, styles, scripts) {
        this.title = title;
        this.styles = styles;
        this.scripts = scripts;
        this.msg_error = undefined;
        this.msg_success = undefined;
    }

    clearMessages() {
        this.msg_error = undefined;
        this.msg_success = undefined;
    }
}

const login_page_styles_css = [ '/css/login.css' ];
const config_login_page = new ConfigurationPage('Login', login_page_styles_css);

const dashboard_page_styles_css = [ '/css/dashboard.css' ];
const config_dashboard_page = new ConfigurationPage('Dashboard', dashboard_page_styles_css);

const customers_page_scripts = [ '/js/customers.js' ];
const config_customers_page = new ConfigurationPage('Customers', undefined, customers_page_scripts);


const customers_add_page_scripts = [ '/js/customer-add.js' ];
const config_customers_add_page = new ConfigurationPage('Add Customer', undefined, customers_add_page_scripts);

const config_customers_details_page = new ConfigurationPage('Details Customer');

const customers_edit_page_scripts = [ '/js/customer-edit.js' ];
const config_customers_edit_page = new ConfigurationPage('Edit Customer', undefined, customers_edit_page_scripts);

const config_cars_page = new ConfigurationPage('Cars');

const config_about_page = new ConfigurationPage('About');

module.exports = {
    config_login_page,
    config_dashboard_page,
    config_about_page,
    config_customers_page,
    config_customers_add_page,
    config_customers_details_page,
    config_customers_edit_page,
    config_cars_page
};