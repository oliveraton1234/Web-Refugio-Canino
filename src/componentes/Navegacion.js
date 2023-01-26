import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';

const Navegacion = () => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/imagenes/Sandoval2.jpg"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='/'>Inicio</Nav.Link>                        
                        <Nav.Link href='/Contacto'>Contacto</Nav.Link>
                        <Nav.Link href="">Adopcion</Nav.Link>
                        <Nav.Link href="">Cuidados</Nav.Link>
                        <Nav.Link href="/Ingresa">Ingresa</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
};

export default Navegacion;
