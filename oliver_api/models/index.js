const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
//local
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
module.exports = db;

db.persona = require("./persona.model.js")(sequelize, Sequelize);
db.rol = require("./rol.model.js")(sequelize, Sequelize);
db.usuario = require("./usuario.model.js")(sequelize, Sequelize);
db.proveedor = require("./proveedor.model.js")(sequelize, Sequelize);
db.oferta = require("./oferta.model.js")(sequelize, Sequelize);
db.producto = require("./producto.model.js")(sequelize, Sequelize);
db.pedido = require("./pedido.model.js")(sequelize, Sequelize);
db.detallepedido = require("./detallepedido.model.js")(sequelize, Sequelize);
db.devolucion = require("./devolucion.model.js")(sequelize, Sequelize);
db.empresa = require("./empresa.model.js")(sequelize, Sequelize);

//establecer las relaciones

//relacion con unuario, persona y rol
db.rol.hasMany(db.usuario, {
    foreignKey: "id_rol",
});

db.usuario.belongsTo(db.rol, {
    foreignKey: "id_rol",
}); 

db.persona.hasOne(db.usuario, {
    foreignKey: "id_persona",
});

db.usuario.belongsTo(db.persona, {
    foreignKey: "id_persona",
}); 

//relacion de proveedor con persona y empresa
db.persona.hasOne(db.proveedor, {
    foreignKey: "id_proveedor",
});

db.proveedor.belongsTo(db.persona, {
    foreignKey: "id_proveedor",
});

db.empresa.hasOne(db.proveedor, {
    foreignKey: "id_empresa",
});

db.proveedor.belongsTo(db.empresa, {
    foreignKey: "id_empresa",
});

//Relacion de poducrto con proveedor y oferta 

db.proveedor.hasMany(db.producto, {
    foreignKey: "id_proveedor",
});

db.producto.belongsTo(db.proveedor, {
    foreignKey: "id_proveedor",
});

db.oferta.hasOne(db.producto, {
    foreignKey: "id_oferta",
});

db.producto.belongsTo(db.oferta, {
    foreignKey: "id_oferta",
});

//Relacion pedido y usuario

db.usuario.hasMany(db.pedido, {
    foreignKey: "id_usuario",
});

db.pedido.belongsTo(db.usuario, {
    foreignKey: "id_usuario",
});

// Relacion detalle con producto y pedido

db.producto.hasOne(db.detallepedido, {
    foreignKey: "id_producto",
});

db.detallepedido.belongsTo(db.producto, {
    foreignKey: "id_producto",
});

db.pedido.hasOne(db.detallepedido, {
    foreignKey: "id_pedido",
});

db.detallepedido.belongsTo(db.pedido, {
    foreignKey: "id_pedido",
});

//Relacion de Devoclucion, usuario y pediodo

db.usuario.hasOne(db.devolucion, {
    foreignKey: "id_usuario_soli",
});

db.devolucion.belongsTo(db.usuario, {
    foreignKey: "id_usuario_soli",
});

db.pedido.hasOne(db.devolucion, {
    foreignKey: "id_pedido",
});

db.devolucion.belongsTo(db.pedido, {
    foreignKey: "id_pedido",
});

db.usuario.hasOne(db.devolucion, {
    foreignKey: "id_usuario_entre",
});

db.devolucion.belongsTo(db.usuario, {
    foreignKey: "id_usuario_entre",
});