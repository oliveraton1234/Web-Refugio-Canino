module.exports = (sequelize, Sequelize) => {
    const Oferta = sequelize.define("oferta", {
        id_oferta: {
            type: Sequelize.INTEGER
        },
        num_compras: {
            type: Sequelize.INTEGER
        },
        cod_pago: {
            type: Sequelize.STRING
        },
        precio: {
            type: Sequelize.STRING
        },
        descripcion: {
            type: Sequelize.STRING
        }
    });
    return Oferta;
};

