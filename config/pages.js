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

const styles_css = [ '/css/login.css' ];
const config_login_page = new ConfigurationPage('Login', styles_css);

module.exports = {
    config_login_page,
}