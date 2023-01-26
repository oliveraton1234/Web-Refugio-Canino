const express = require("express"); //Construir API Rest
const bodyParser = require("body-parser");
const cors = require("cors");
// aplicación Express
const app = express();

var corsOptions = {
    origin: "http://localhost:9595"
};

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
//habilitar el cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, XRequested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// route raiz
app.get("/", (req, res) => {
    res.json({
        message: "Bienvenido a la aplicacion nodejs, express, sequelize, postgresql."
    });
});

//require("./routes/rol.routes")(app);
//require('./routes/usuario.routes')(app);
require("./routes/index.routes")(app);

// asignar port para escuchar requests
const PORT = process.env.PORT || 9595;
app.listen(PORT, () => {
    console.log(`Server esta ejecutandose en puerto ${PORT}.`);
});

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => { //true para tirar la base de datos
    console.log("Eliminar y sincronizar db");
});

