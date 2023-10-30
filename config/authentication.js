const config_bcrypt = {
    saltRounds: 10,
};

const config_session = {
    secret: 'Coffee and Milk, Please',
    resave: false,
    saveUninitialized: true,
}


module.exports = {
    config_bcrypt,
    config_session
};