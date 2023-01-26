module.exports = (sequelize, Sequelize) => {
    const Persona = sequelize.define("persona", {
        id_persona: {
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING
        },
        apellidopat: {
            type: Sequelize.STRING
        },
        apellidomat: {
            type: Sequelize.STRING
        },
        edad: {
            type: Sequelize.INTEGER
        },
        rfc: {
            type: Sequelize.STRING
        },
        telefono: {
            type: Sequelize.INTEGER
        },
        fechanaci: {
            type: Sequelize.DATEONLY
        },
        domicilio: {
            type: Sequelize.STRING
        },
    });
    return Persona;
};
