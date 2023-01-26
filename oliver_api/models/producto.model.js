module.exports = (sequelize, Sequelize) => {
    const Producto = sequelize.define("producto", {
        id_producto: {
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.STRING
        },
        imagen: {
            type: Sequelize.STRING
        },
        numExistencias: {
            type: Sequelize.INTEGER
        },
        cod_barras: {
            type: Sequelize.STRING
        },
        iva: {
            type: Sequelize.STRING
        },
        id_proveedor: {
            type: Sequelize.INTEGER
        },
        id_oferta: {
            type: Sequelize.INTEGER
        },
    });
    return Producto;
};
