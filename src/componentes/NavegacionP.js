import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './NavegacionP.css';

const NavegacionP = () => {
    return (
        <>
            <Navbar bg="light">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            src="/imagenes/Sandoval2.jpg"
                            height="30"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href='/Admin'>Roles</Nav.Link>
                        <Nav.Link href="/Usuario">Usuario</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        <Button className='buttonS' href='/' variant="danger">Salir</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Outlet/>
        </>
    );
};

export default NavegacionP;
