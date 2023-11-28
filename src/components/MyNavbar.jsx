import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <div className="container">

        <Navbar.Brand as={NavLink} to="/">
          <img
              src="img/logo_2.png"
              height="50"
              className="d-inline-block align-top"
              alt="La casa de abajo logo"
            />
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link as={NavLink} to="/sobre-el-proyecto">Acerca del proyecto</Nav.Link>
            <Nav.Link as={NavLink} to="/carrito">Carrito</Nav.Link>
            <Nav.Link as={NavLink} to="/producto">Producto</Nav.Link>

            <NavDropdown title="Categoría" id="basic-nav-dropdown">
              <NavDropdown.Item href="/categoria">Café</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Bazar</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Máquinas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Merchandising
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Gift</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Talleres</NavDropdown.Item>
              
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
