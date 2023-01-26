import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

const NavegacionU = () =>{
    return(
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
                        <Nav.Link href='/Visita'>Visitas</Nav.Link>
                        <Nav.Link href='/Requisitos'>Requisitos</Nav.Link>
                        <Nav.Link href='/Solicita'>Solicita</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Button className='buttonS' href='/' variant="danger">Salir</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    )
}

export default NavegacionU;