const db = require("../models");
const Rol = db.rol;
const Op = db.Sequelize.Op;

// Crear y Guardar un nuevo Rol
exports.create = (req, res) => {
    // Validar request
    if (!req.body.id_rol) {
        res.status(400).send({
            message: "El contenido no puede ser vacio, id= " + req.body.id_rol + "descripcion= " + req.body.descripcion
        });
        return;
    }

    // Crear un Rol
    const rol = {
        id_rol: req.body.id_rol,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion
    };

    // Guardar Rol en la base de datos
    Rol.create(rol)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al crear Rol."
            });
        });
};

// Recuperar todos los Roles de la base de datos
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    Rol.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al recuperar todos los Roles."
            });
        });
};

// Encontrar Rol por id
exports.findOne = (req, res) => {
    const id_rol = req.params.id_rol;
    Rol.findByPk(id_rol)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar Rol por id=" + id_rol
            });
        });
};

// Actualizar Rol por id
exports.update = (req, res) => {
    const id_rol = req.params.id_rol;
    Rol.update(req.body, {
        where: { id_rol: id_rol }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Rol se actualizo con exito."
                });
            } else {
                res.send({
                    message: `Error al actualizar Rol con id=${id_rol}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar Rol con id=" + id_rol
            });
        });
};

// Eliminar un Rol por id
exports.delete = (req, res) => {
    const id_rol = req.params.id_rol;
    Rol.destroy({
        where: { id_rol: id_rol }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Rol eliminado con exito!"
                });
            } else {
                res.send({
                    message: `Error al eliminar Rol con id=${id_rol}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar Rol con id=" + id_rol
            });
        });
};

// Eliminar todos los Rol de la base de datos
exports.deleteAll = (req, res) => {
    Rol.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Roles fueron eliminados con exito!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al eliminar Roles."
            });
        });
};

// Encontrar todos los Roles permiso de creacion
exports.findAllIsCrear = (req, res) => {
    Rol.findAll({ where: { isCrear: true } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al recuperar Roles por isCrear activo."
            });
        });
};
