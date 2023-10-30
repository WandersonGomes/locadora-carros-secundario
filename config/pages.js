class ConfigurationPage {
    constructor(title, styles) {
        this.title = 'Login';
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

module.exports = {
    config_login_page,
}