import { Button, Form, Input } from 'semantic-ui-react'
import './Edita.css'
import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import { Location } from 'react-router-dom';

const Editar = () => {
    let navigate = useNavigate();
    const [ID, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDes] = useState('');
    const [isCrear, setIsC] = useState('');
    const [isActualizar, setIsA] = useState('');
    const [isBorrar, setIsB] = useState('');
    const Swal = require('sweetalert2');
    
    useEffect(() => {
        setNombre(localStorage.getItem('nombre'));
        setDes(localStorage.getItem('descripcion'));
        setIsC(localStorage.getItem('isCrear'));
        setIsA(localStorage.getItem('isActualizar'));
        setIsB(localStorage.getItem('isBorrar'));
        setID(localStorage.getItem('ID'));
    }, [])

    const sendData = () => {
        axios.put(`http://localhost:9595/administrador/rol/${ID}`, {
            nombre,
            descripcion,
            isCrear,
            isActualizar,
            isBorrar
        }).then(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Rol modificado con exito',
                showConfirmButton: false,
                timer: 1500
            })
            navigate("/Admin")
        })
    }

    const direct = () => {
        navigate("/Admin")
    }

    return (
        <>
            <div className='up'>
                <Form className='form'>
                    <h2 className='titulo'>Editar Rol</h2>
                    <Form.Field>
                        <label>Nombre</label>
                        <input
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            placeholder='Nombre' />
                    </Form.Field>
                    <Form.Field>
                        <label>Descripcion</label>
                        <input
                            value={descripcion}
                            onChange={(e) => setDes(e.target.value)}
                            placeholder='Descripcion' />
                    </Form.Field>
                    <Form.Field>
                        <label>Is Crear </label>
                        <Input list='isCrear' value={isCrear}
                            onChange={(e) => setIsC(e.target.value)} placeholder='Elija un valor...' />
                        <datalist id='isCrear'>
                            <option value='true'>true</option>
                            <option value='false'>false</option>
                        </datalist>
                        {/* <input 
                        value={isCrear}
                        onChange={(e) => setIsC(e.target.value)}
                        placeholder='Descripcion' /> */}
                    </Form.Field>
                    <Form.Field>
                        <label>Is Actualizar</label>
                        <Input list='isActualizar' value={isActualizar}
                            onChange={(e) => setIsA(e.target.value)} placeholder='Elija un valor...' />
                        <datalist id='isActualizar'>
                            <option value='true'>true</option>
                            <option value='false'>false</option>
                        </datalist>
                        {/* <input
                            value={isActualizar}
                            onChange={(e) => setIsA(e.target.value)}
                            placeholder='Descripcion' /> */}
                    </Form.Field>
                    <Form.Field>
                        <label>Is Borrar</label>
                        <Input list='isBorrar' value={isBorrar}
                            onChange={(e) => setIsB(e.target.value)} placeholder='Elija un valor...' />
                        <datalist id='isBorrar'>
                            <option value='true'>true</option>
                            <option value='false'>false</option>
                            </datalist>
                        {/* <input
                            value={isBorrar}
                            onChange={(e) => setIsB(e.target.value)}
                            placeholder='Descripcion' /> */}
                    </Form.Field>
                    <Button.Group>
                        <Button onClick={direct}>Cancelar</Button>
                        <Button.Or text='o' />
                        <Button positive type='submit' onClick={sendData}>Editar</Button>
                    </Button.Group>
                </Form>
            </div>
        </>
    )
}

export default Editar;