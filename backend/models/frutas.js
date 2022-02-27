const mongoose = require('mongoose');

const fresasSchema = mongoose.Schema({
    nombre: {
        type: String,
        require: true
    },
    cantidad: {
        type: Number,
        require: true
    },
    proveedor: {
        type: String,
        require: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('fruta', fresasSchema)
