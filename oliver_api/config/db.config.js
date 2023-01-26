
module.exports = {
    //Local
    HOST: "localhost",
    USER: "refugio_admin",
    PASSWORD: "administrador",
    DB: "db_tercerparcial",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000, //tiempo máximo, en milisegundos, que el grupo intentará conectarseantes de lanzar el error
        idle: 10000 //tiempo máximo, en milisegundos, que una conexión puede estar inactiva antes de ser liberada
    }
};
