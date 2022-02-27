 

const express = require('express');
const conectar_DB = require('./config/db');
const cors = require('cors');

const app = express();
conectar_DB();
app.use(cors());

app.use(express.json());

app.use('/api/frutas', require('./routes/frutas'));

app.listen(3000,() => {
    console.log("el servidor se esta ejecutando en http://localhost:3000");
})
