import { useEffect, useState } from "react";
import "./MyNavbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      if (scrolled !== isTop) {
        setIsTop(scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isTop]);


  return (
    <Navbar expand="lg" className={`mynavbar ${isTop ? 'bg-body-tertiary' : 'navbar-transparent'}`}>
      <div className="container justify-content-end">
        <Navbar.Brand as={NavLink} to="/" className="mynavbarlogo p-0 m-0">
          <img
            src="img/logo_2.png"
            height="50"
            className="d-inline-block align-top"
            alt="La casa de abajo logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="hamburgerBtn"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex text-end justify-content-center gap-4">
            
            <div className="d-flex justify-content-end">
              <Nav.Link as={NavLink} to="/sobre-el-proyecto">
                Acerca del proyecto
              </Nav.Link>
            </div>
            <div className="d-flex justify-content-end">
              <Nav.Link as={NavLink} to="/carrito">
                Carrito
              </Nav.Link>
            </div>
            <div className="d-flex justify-content-end">
              <Nav.Link as={NavLink} to="/producto">
                Producto
              </Nav.Link>
            </div>

            <div className="d-flex justify-content-end">
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
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
