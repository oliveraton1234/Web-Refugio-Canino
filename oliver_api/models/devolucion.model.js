module.exports = (sequelize, Sequelize) => {
    const Devolucion = sequelize.define("devolucion", {
        id_devolucion: {
            type: Sequelize.INTEGER
        },
        id_usuario_soli: {
            type: Sequelize.INTEGER
        },
        id_pedido: {
            type: Sequelize.INTEGER
        },
        id_usuario_entre: {
            type: Sequelize.INTEGER
        },
        fecha_soli: {
            type: Sequelize.DATEONLY
        },
        fecha_entre: {
            type: Sequelize.DATEONLY
        },
        estatus: {
            type: Sequelize.BOOLEAN
        }
    });
    return Devolucion;
};
