import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginP = () => {
    let navigate = useNavigate();
    const [correo, setCorreo] = useState();
    const [password, setPassword] = useState();

    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(
                'http://localhost:9595/administrador/login', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "content-type": "application/json",
                },
                body: JSON.stringify({
                    correo: correo,
                    contrasenia: password
                })
            }
            );
            if (res.status === 200) {
                console.log(res.status);
                navigate("/Admin");
            }
            else if (res.status === 201) {
                console.log(res.status);
                navigate("/Visita");
            }else if (res.status === 202) {
                console.log(res.status);
                navigate("/");
            } else {
                alert("Usuario no identificado")
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='form1'>
                <Card border='warning'>
                    <Form className='formm' method='POST' onSubmit={handleSubmit}>
                        <img className='logoImg' alt='principalCarrousel' src='./imagenes/Sandoval2.jpg' />
                        <h3>Ingresa</h3>
                        <Form.Group className="mb-1" controlId="formBasicEmail">
                            <Form.Label>Dirección de Correo:</Form.Label>
                        </Form.Group>
                        
                        <input className="correo" type="text" onChange={e => setCorreo(e.target.value)} />    

                        <Form.Group className="mb-1" controlId="formBasicPassword">
                            <Form.Label>Contraseña:</Form.Label>
                        </Form.Group>
                        <input className='contra' type="password" onChange={e => setPassword(e.target.value)} />

                        

                        <div className="d-grid gap-2">

                            <input className='BIngresa' value="Ingresa" type="submit" />

                            <Button href='/' className='BCancela' variant="secondary" size="medium">
                                Cancelar
                            </Button>

                            <p> <a>¿No tienes una cuenta?</a> <a href='/Registro'>Registrate</a></p>
                        </div>
                    </Form>
                </Card>

            </div>
        </>
    );
}

export default LoginP;