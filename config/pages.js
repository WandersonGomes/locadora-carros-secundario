class ConfigurationPage {
    constructor(title, styles) {
        this.title = title;
        this.styles = styles;
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

const config_about_page = new ConfigurationPage('About');

module.exports = {
    config_login_page,
    config_dashboard_page,
    config_about_page
}