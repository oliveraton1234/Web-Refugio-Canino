module.exports = (sequelize, Sequelize) => {
    const Detallepedido = sequelize.define("detallepedido", {
        id_detalle: {
            type: Sequelize.INTEGER
        },
        id_producto: {
            type: Sequelize.INTEGER
        },
        id_pedido: {
            type: Sequelize.INTEGER
        },
        cantidadProducto: {
            type: Sequelize.STRING
        },
        subtotal: {
            type: Sequelize.STRING
        }
    });
    return Detallepedido;
};
