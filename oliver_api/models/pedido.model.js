module.exports = (sequelize, Sequelize) => {
    const Pedido = sequelize.define("pedido", {
        id_pedido: {
            type: Sequelize.INTEGER
        },
        fecha_pedido: {
            type: Sequelize.DATEONLY
        },
        fecha_entrega: {
            type: Sequelize.DATEONLY
        },
        total: {
            type: Sequelize.STRING
        },
        estatus: {
            type: Sequelize.BOOLEAN
        },
        forma_entrega: {
            type: Sequelize.STRING
        },
        id_usuario: {
            type: Sequelize.INTEGER
        },
    });
    return Pedido;
};
