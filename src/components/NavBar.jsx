import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "../components/CartWidget"
export const NavBar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand>
          <Nav.Link as={Link} to="/">Ecommerce</Nav.Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="category/telefonos">telefonos</Nav.Link>
            <Nav.Link as={Link} to="category/auriculares">auriculares</Nav.Link>
            <Nav.Link as={Link} to="category/computadoras">computadoras</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>
    )
}