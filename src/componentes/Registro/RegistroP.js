import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2'

const RegistroP = () => {
    let navigate = useNavigate();
    const [mail, setCorreo] = useState();
    const [password, setPassword] = useState();
    const Swal = require('sweetalert2')

    let register = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(
                'http://localhost:9595/administrador/registrar', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    correo: mail,
                    contrasenia: password,
                    estatus: true,
                    fechaRegistro: "2022-11-30",
                    fechaVigencia: "2022-11-30",
                    rol_id: 2
                })
            }
            );
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Usuario guardado con exito',
                showConfirmButton: false,
                timer: 1500
              })
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className='form1'>
                <Card border='info'>
                    <Form method="POST" onSubmit={register} className='formm'>
                        <img className='logoImg' src='./imagenes/Sandoval2.jpg' />
                        <h3>Registrate</h3>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Dirección de Correo:</Form.Label>
                        </Form.Group>
                        <input className='correo' type="email" onChange={e => setCorreo(e.target.value)} />

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña:</Form.Label>
                        </Form.Group>
                        <input className='contra' type="password" onChange={e => setPassword(e.target.value)} />

                        
                               
                        <div className="d-grid gap-2">
                            <input type="submit" className='BIngresa' value="Registrarse" />

                            <Button href='/Ingresa' className='BCancela' variant="secondary" size="medium">
                                Cancelar
                            </Button>
                        </div>
                    </Form>
                </Card>
            </div>
        </>
    );
}

export default RegistroP;