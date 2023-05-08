require ('dotenv').config()
const express = require("express");
const cors = require('cors');
const puerto = process.env.PUERTO; 

const app = express();

require('./config/mongoose.config')
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/formulario.routes')(app);

app.listen(puerto, () =>{
    console.log("Listening at Port" + puerto)
})