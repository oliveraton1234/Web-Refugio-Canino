const db = require("../models");
const Persona = db.persona;
const Op = db.Sequelize.Op;

// Crear y Guardar un nueva Persona
exports.create = (req, res) => {
    // Validar request
    if (!req.body.id_persona) {
        res.status(400).send({
            message: "El contenido no puede ser vacio, id= " + req.body.id_persona + "nombre= " + req.body.nombre
        });
        return;
    }

    // Crear Persona
    const persona = {
        id_persona: req.body.id_persona,
        nombre: req.body.nombre,
        apellidopat: req.body.apellidopat,
        apellidomat: req.body.apellidomat,
        edad: req.body.edad,
        rfc: req.body.rfc,
        telefono: req.body.telefono,
        fechanaci: req.body.fechanaci,
        domicilio: req.body.domicilio
    };

    // Guardar Persona en la base de datos
    Persona.create(persona)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ocurrio un error al crear Persona."
            });
        });
};

// Recuperar todos los Roles de la base de datos
exports.findAll = (req, res) => {
    const nombre = req.query.nombre;
    var condition = nombre ? { nombre: { [Op.iLike]: `%${nombre}%` } } : null;
    Persona.findAll({ where: condition })
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

// Encontrar Persona por id
exports.findOne = (req, res) => {
    const id_persona = req.params.id_persona;
    Persona.findByPk(id_persona)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al recuperar Persona por id=" + id_persona
            });
        });
};

// Actualizar Persona por id
exports.update = (req, res) => {
    const id_persona = req.params.id_persona;
    Persona.update(req.body, {
        where: { id_persona: id_persona }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Persona se actualizo con exito."
                });
            } else {
                res.send({
                    message: `Error al actualizar Persona con id=${id_persona}!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al actualizar Rol con id=" + id_persona
            });
        });
};

// Eliminar un Rol por id
exports.delete = (req, res) => {
    const id_persona = req.params.id_persona;
    Persona.destroy({
        where: { id_persona: id_persona }
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
    Persona.destroy({
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
    Persona.findAll()
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
