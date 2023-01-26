module.exports = (sequelize, Sequelize) => {
    const Proveedor = sequelize.define("proveedor", {
        id_proveedor: {
            type: Sequelize.INTEGER
        },
        dia_entrega: {
            type: Sequelize.DATEONLY
        },
        tipo_persona: {
            type: Sequelize.STRING
        },
        id_persona: {
            type: Sequelize.INTEGER
        },
        id_empresa: {
            type: Sequelize.INTEGER
        }
    });
    return Proveedor;
};
