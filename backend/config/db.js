const mongoose = require('mongoose');
require('dotenv').config({ path: 'config.env' });


const conectar_DB = async() => {
    try {
        await mongoose.connect(process.env.DB_MONGO, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada con exito')
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = conectar_DB
