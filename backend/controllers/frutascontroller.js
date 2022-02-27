const fruta = require('../models/frutas');

exports.postfrutas = async(req, res) => {
    // console.log('Creando el producto desde el controlador');
    // console.log(req.body);

    try {
        let data_fruta;
        data_fruta= new fruta(req.body);
        await data_fruta.save();
        res.send(data_fruta)

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }

}

exports.getfrutas = async(req, res) => {
    try {
        const data_fruta = await fruta.find();
        res.json(data_fruta);
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.getfruta = async(req, res) => {
    try {
        const data_fruta = await fruta.findById(req.params.id);

        if (!data_fruta) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias' })
        }
        res.json(data_fruta);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}

exports.putfruta = async(req, res) => {
    try {
        const { nombre, cantidad, proveedor} = req.body
        let data_fruta= await fruta.findById(req.params.id);

        if (!data_fruta) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para la actualización de datos' })
        }

        data_fruta.nombre = nombre;
        data_fruta.cantidad = cantidad;
        data_fruta.proveedor = proveedor;
    

        data_fruta = await fruta.findOneAndUpdate({ _id: req.params.id }, data_fruta, { new: true })
        res.json(data_fruta);

    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}


exports.deletefruta = async(req, res) => {
    try {
        const data_fruta = await fruta.findById(req.params.id);
        if (!data_fruta) {
            res.status(404).json({ mensaje: 'No se encontraron coincidencias para eliminar productos' })
        }
        await fruta.findByIdAndRemove({ _id: req.params.id });
        res.json({ mensaje: 'Producto eliminado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Ups... Hay un error, comuniquese con soporte');
    }
}
