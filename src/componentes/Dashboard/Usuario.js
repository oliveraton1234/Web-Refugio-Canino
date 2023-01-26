import NavegacionP from "../NavegacionP"
import { Table, Button, Modal, Form, Input } from 'semantic-ui-react'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import Swal from 'sweetalert2'

const Usuario = () => {

    const [Data, setData] = useState([]);
    let location = useLocation();
    const [open, setOpen] = React.useState(false)

    const [correo, setCorreo2] = useState('');
    const [contrasenia, setContra2] = useState('');
    const [estatus, setEstatus2] = useState('');
    const [fechaRegistro, setFR] = useState('');
    const [fechaVigencia, setFV] = useState('');
    const [rol_id, setRol] = useState('');
    const Swal = require('sweetalert2');

    useEffect(() => {
        axios.get(`http://localhost:9595/administrador/usuario/listar`)
            .then((getData) => {
                setData(getData.data);
            })
    }, [])

    // useEffect(() => {
    //     axios.get(`http://localhost:9595/administrador/usuario/listar`)
    //         .then((getData) => {
    //             setData(getData.data);
    //         })
    // }, [])

    // useEffect(() => {
    //     setID(localStorage.getItem('ID'));
    // }, [])

    const settData = (id, correo, estatus, fechaRegistro, fechaVigencia, rol_id) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('correo', correo)
        localStorage.setItem('estatus', estatus)
        localStorage.setItem('fechaR', fechaRegistro)
        localStorage.setItem('fechaV', fechaVigencia)
        localStorage.setItem('rol_id', rol_id)
    }

    const Ddelete = (id) => {
        axios.delete(`http://localhost:9595/administrador/usuario/${id}`)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Usuario eliminado con exito',
                    showConfirmButton: false,
                    timer: 1500
                })
                location.reload();
            })
    }

    const sentData2 = () => {
        axios.post(`http://localhost:9595/administrador/registrar`, {
            correo,
            contrasenia,
            estatus,
            fechaRegistro,
            fechaVigencia,
            rol_id
        })
    }

    return (
        <>
            <NavegacionP />
            <div className="tablee">
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button positive className="crear">Crear Usuario</Button>}
                >
                    <Modal.Content image>
                        <Modal.Description>
                            <Form className='form'>
                                <h2 className='titulo'>Crear Usuario</h2>
                                <Form.Field>
                                    <label>Correo</label>
                                    <input
                                        value={correo}
                                        onChange={(e) => setCorreo2(e.target.value)}
                                        placeholder='correo' />
                                </Form.Field>
                                <Form.Field>
                                    <label>contrasenia</label>
                                    <input
                                        value={contrasenia}
                                        onChange={(e) => setContra2(e.target.value)}
                                        placeholder='Contrasenia' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Estatus</label>
                                    <Input list='estatus' value={estatus} 
                                    onChange={(e) => setEstatus2(e.target.value)} placeholder='Elija un estatus...' />
                                    <datalist id='estatus'>
                                        <option value='true'>true</option>
                                        <option value='false'>false</option>
                                    </datalist>
                                </Form.Field>
                                <Form.Field>
                                    <label>Fecha Registro</label>
                                    <input
                                        value={fechaRegistro}
                                        onChange={(e) => setFR(e.target.value)}
                                        placeholder='Descripcion' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Fecha Vigencia</label>
                                    <input
                                        value={fechaVigencia}
                                        onChange={(e) => setFV(e.target.value)}
                                        placeholder='Descripcion' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Id de Rol</label>
                                    <input
                                        value={rol_id}
                                        onChange={(e) => setRol(e.target.value)}
                                        placeholder='Rol Id' />
                                </Form.Field>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={() => setOpen(false)}>
                            Cerrar
                        </Button>
                        <Button
                            content="Crear Usuario"
                            labelPosition='right'
                            icon='checkmark'
                            onClick={sentData2}
                            positive
                        />
                    </Modal.Actions>
                </Modal>

                <Table celled inverted selectable>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Correo</Table.HeaderCell>
                            <Table.HeaderCell>Fecha Registro</Table.HeaderCell>
                            <Table.HeaderCell>Fecha Vigencia</Table.HeaderCell>
                            <Table.HeaderCell>Rol Id</Table.HeaderCell>
                            <Table.HeaderCell>Editar</Table.HeaderCell>
                            <Table.HeaderCell>Eliminar</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {Data.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell> {data.correo} </Table.Cell>
                                    <Table.Cell> {data.fechaRegistro} </Table.Cell>
                                    <Table.Cell> {data.fechaVigencia} </Table.Cell>
                                    <Table.Cell> {data.rol.nombre} </Table.Cell>
                                    <Table.Cell>
                                        <Link to='/EditarU'>
                                            <Button inverted color='teal' onClick={() => settData(data.id, data.correo, data.estatus, data.fechaRegistro, data.fechaVigencia, data.rol_id)}>
                                                Editar
                                            </Button>
                                        </Link>
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button inverted color='red' onClick={() => Ddelete(data.id)}>Eliminar</Button>
                                    </Table.Cell>
                                </Table.Row>
                            )
                        })}
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default Usuario;