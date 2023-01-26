module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
        id_usuario: {
            type: Sequelize.INTEGER
        },
        correo: {
            type: Sequelize.STRING
        },
        contrasenia: {
            type: Sequelize.STRING
        },
        estatus: {
            type: Sequelize.BOOLEAN
        },
        fechaRegistro: {
            type: Sequelize.DATEONLY
        },
        fechaVigencia: {
            type: Sequelize.DATEONLY
        },
        id_persona: {
            type: Sequelize.INTEGER
        },
        id_rol: {
            type: Sequelize.INTEGER
        }
    });
    return Usuario;
};
