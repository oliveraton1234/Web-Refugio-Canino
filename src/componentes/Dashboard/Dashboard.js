import NavegacionP from "../NavegacionP";
import './Dashboard.css';
import { Table, Button, Modal, Form, Input } from 'semantic-ui-react'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router';
import Swal from 'sweetalert2'

const Dashboard = () => {
    const [Data, setData] = useState([]);
    const [open, setOpen] = React.useState(false)

    const [nombre, setNombre2] = useState('');
    const [descripcion, setDes2] = useState('');
    const [isCrear, setIsC2] = useState('');
    const [isActualizar, setIsA2] = useState('');
    const [isBorrar, setIsB2] = useState('');
    const Swal = require('sweetalert2');

    useEffect(() => {
        axios.get(`http://localhost:9595/administrador/rol/listar`)
            .then((getData) => {
                setData(getData.data);
            })
    }, [])

    const settData = (id, nombre, descripcion, isCrear, isActualizar, isBorrar) => {
        console.log(isBorrar);
        localStorage.setItem('ID', id)
        localStorage.setItem('nombre', nombre)
        localStorage.setItem('descripcion', descripcion)
        localStorage.setItem('isCrear', isCrear)
        localStorage.setItem('isActualizar', isActualizar)
        localStorage.setItem('isBorrar', isBorrar)
    }

    const Ddelete = (id) => {
        axios.delete(`http://localhost:9595/administrador/rol/${id}`)
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Rol eliminado con exito',
                    showConfirmButton: false,
                    timer: 1500
                })
                Location.reload(true);
            })
    }

    const sentData2 = () => {
        axios.post(`http://localhost:9595/administrador/registrarRol`, {
            nombre,
            descripcion,
            isCrear,
            isActualizar,
            isBorrar      
        }).then(() =>{
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Rol reguistrado con exito',
                showConfirmButton: false,
                timer: 1500
            }) 
        })
    }

    return (
        <>
            <NavegacionP />
            <p />
            <img alt="principal" className="imagenP" src="/imagenes/ImagenPrincipal.jpg" />
            <div className="tablee">
                <Modal
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    trigger={<Button positive className="crear">Crear Rol</Button>}
                >
                    <Modal.Content image>
                        <Modal.Description>
                            <Form className='form'>
                                <h2 className='titulo'>Crear Rol</h2>
                                <Form.Field>
                                    <label>Nombre</label>
                                    <input
                                        value={nombre}
                                        onChange={(e) => setNombre2(e.target.value)}
                                        placeholder='Nombre' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Descripcion</label>
                                    <input
                                        value={descripcion}
                                        onChange={(e) => setDes2(e.target.value)}
                                        placeholder='Descripcion' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Is Crear </label>
                                    <Input list='IsCrear' value={isCrear}
                                        onChange={(e) => setIsC2(e.target.value)} placeholder='Elija un valor...' />
                                    <datalist id='IsCrear'>
                                        <option value='true'>true</option>
                                        <option value='false'>false</option>
                                    </datalist>
                                    {/* <input
                                        value={isCrear}
                                        onChange={(e) => setIsC2(e.target.value)}
                                        placeholder='Descripcion' /> */}
                                </Form.Field>
                                <Form.Field>
                                    <label>Is Actualizar</label>
                                    <Input list='isActualizar' value={isActualizar}
                                        onChange={(e) => setIsA2(e.target.value)} placeholder='Elija un valor...' />
                                    <datalist id='isActualizar'>
                                        <option value='true'>true</option>
                                        <option value='false'>false</option>
                                    </datalist>
                                    {/* <input
                                        value={isActualizar}
                                        onChange={(e) => setIsA2(e.target.value)}
                                        placeholder='Descripcion' /> */}
                                </Form.Field>
                                <Form.Field>
                                    <label>Is Borrar</label>
                                    <Input list='isBorrar' value={isBorrar}
                                        onChange={(e) => setIsB2(e.target.value)} placeholder='Elija un valor...' />
                                    <datalist id='isBorrar'>
                                        <option value='true'>true</option>
                                        <option value='false'>false</option>
                                    </datalist>
                                    {/* <input
                                        value={isBorrar}
                                        onChange={(e) => setIsB2(e.target.value)}
                                        placeholder='Descripcion' /> */}
                                </Form.Field>
                            </Form>
                        </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='black' onClick={() => setOpen(false)}>
                            Cerrar
                        </Button>
                        <Button
                            content="Crear Rol"
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
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Nombre</Table.HeaderCell>
                            <Table.HeaderCell>Descripcion</Table.HeaderCell>
                            <Table.HeaderCell>Editar</Table.HeaderCell>
                            <Table.HeaderCell>Eliminar</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {Data.map((data) => {
                            return (
                                <Table.Row>
                                    <Table.Cell> {data.id} </Table.Cell>
                                    <Table.Cell> {data.nombre} </Table.Cell>
                                    <Table.Cell> {data.descripcion} </Table.Cell>
                                    <Table.Cell>
                                        <Link to='/Editar'>
                                            <Button inverted color='teal' onClick={() => settData(data.id, data.nombre, data.descripcion, data.isCrear, data.isActualizar, data.isBorrar)}>
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
    );
}

export default Dashboard;