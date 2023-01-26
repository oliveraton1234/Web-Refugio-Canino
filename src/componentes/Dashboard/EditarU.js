import { Button, Form, Input } from 'semantic-ui-react'
import './Edita.css'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'

const EditarU = () => {

    let navigate = useNavigate();
    const [correo, setCorreo2] = useState('');
    const [estatus, setEstatus2] = useState('');
    const [fechaRegistro, setFR] = useState('');
    const [fechaVigencia, setFV] = useState('');
    const [rol_id, setRol] = useState('');
    const [ID, setID] = useState(null);
    const Swal = require('sweetalert2');

    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setCorreo2(localStorage.getItem('correo'));
        setEstatus2(localStorage.getItem('estatus'));
        setFR(localStorage.getItem('fechaR'));
        setFV(localStorage.getItem('fechaV'));
        setRol(localStorage.getItem('rol_id'));
    }, [])

    const sendData = () => {
        axios.put(`http://localhost:9595/administrador/usuario/${ID}`, {
            correo,
            estatus,
            fechaRegistro,
            fechaVigencia,
            rol_id
        }).then(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario modificado con exito',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/Usuario")
        })
    }

    const direct = () => {
        navigate("/Usuario")
    }

    return (
        <>
            <div className='up'>
                <Form className='form'>
                    <h2 className='titulo'>Editar Usuario</h2>
                    <Form.Field>
                        <label>Correo</label>
                        <input
                            value={correo}
                            onChange={(e) => setCorreo2(e.target.value)}
                            placeholder='Correo' />
                    </Form.Field>
                    <Form.Field>
                        <label>Estatus</label>
                        <Input list='estatus' value={estatus}
                            onChange={(e) => setEstatus2(e.target.value)} placeholder='Elija un estatus...' />
                        <datalist id='estatus'>
                            <option value='true'>true</option>
                            <option value='false'>false</option>
                        </datalist>
                        {/* <input 
                        value={estatus}
                        onChange={(e) => setEstatus2(e.target.value)}
                        placeholder='Estatus' /> */}
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
                            placeholder='Fecha Vigencia' />
                    </Form.Field>
                    <Form.Field>
                        <label>Id de Rol</label>
                        <input
                            value={rol_id}
                            onChange={(e) => setRol(e.target.value)}
                            placeholder='Rol' />
                    </Form.Field>
                    <Button.Group>
                        <Button onClick={direct}>Cancelar</Button>
                        <Button.Or text='o' />
                        <Button positive type='submit' onClick={sendData}>Editar Usuario</Button>
                    </Button.Group>
                </Form>
            </div>
        </>
    )
}


export default EditarU;