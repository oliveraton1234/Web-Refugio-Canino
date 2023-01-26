module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("rol", {
        id_rol: {
            type: Sequelize.INT
        },
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });
    return Rol;
};
