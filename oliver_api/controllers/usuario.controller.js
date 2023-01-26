const db = require("../models");
const Usuario = db.usuario;
const Op = db.Sequelize.Op;

// Crear y Guardar un nueva Persona
exports.create = (req, res) => {
    // Validar request
    if (!req.body.id_persona) {
        res.status(400).send({
            message: "El contenido no puede ser vacio, id= " + req.body.id_usuario + "correo= " + req.body.correo
        });
        return;
    }

    // Crear Persona
    const usuario = {
        id_usuario: req.body.id_usuario,
        correo: req.body.correo,
        contrasenia: req.body.contrasenia,
        estatus: req.body.estatus,
        fechaRegistro: req.body.fechaRegistro,
        fechaVigencia: req.body.fechaVigencia,
        id_persona: req.body.id_persona,
        id_rol: req.body.id_rol
    };

    // Guardar Persona en la base de datos
    Usuario.create(usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al crear usuario."
            });
        });
};

// Recuperar todos los Roles de la base de datos
exports.findAll = (req, res) => {
    const correo = req.query.correo;
    var condition = correo ? { correo: { [Op.iLike]: `%${correo}%` } } : null;
    Usuario.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al recuperar todos los Usuarios."
            });
        });
};

// Encontrar Persona por id
exports.findOne = (req, res) => {
    const id_usuario = req.params.id_usuario;
    Usuario.findByPk(id_usuario)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar Usuarios por id=" + id_usuario
            });
        });
};

// Actualizar Persona por id
exports.update = (req, res) => {
    const id_usuario = req.params.id_usuario;
    Usuario.update(req.body, {
        where: { id_usuario: id_usuario }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Usuario se actualizo con exito."
                });
            } else {
                res.send({
                    message: `Error al actualizar Usuario con id=${id_usuario}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar Usuario con id=" + id_usuario
            });
        });
};

// Eliminar un Rol por id
exports.delete = (req, res) => {
    const id_persona = req.params.id_persona;
    Usuario.destroy({
        where: { id_usuario: id_usuario }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Persona eliminada con exito!"
                });
            } else {
                res.send({
                    message: `Error al eliminar Persona con id=${id_persona}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al eliminar Persona con id=" + id_persona
            });
        });
};

// Eliminar todos los Rol de la base de datos
exports.deleteAll = (req, res) => {
    Usuario.destroy({
        where: {},
        truncate: false
    })
        .then(nums => {
            res.send({ message: `${nums} Persona fueron eliminados con exito!` });
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Error al eliminar Personas."
            });
        });
};

// Encontrar todos los Roles permiso de creacion
exports.findAllIsCrear = (req, res) => {
    Usuario.findAll()
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
