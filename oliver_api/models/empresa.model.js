module.exports = (sequelize, Sequelize) => {
    const Empresa = sequelize.define("empresa", {
        id_empresa: {
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING
        },
        domicilio: {
            type: Sequelize.STRING
        },
        rfc: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.INTEGER
        }
    });
    return Empresa;
};
