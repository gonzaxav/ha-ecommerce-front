import { useEffect, useState } from "react";
import "./MyNavbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import axios from "axios";
import logo from "../img/logo_2.png";
import { useSelector } from "react-redux";

function MyNavbar() {
  const [isTop, setIsTop] = useState(true);
  const [categories, setCategories] = useState(null);
  const order = useSelector((state) => state.order);
  const totalProducts = order.reduce(
    (acumulator, currentProduct) => acumulator + currentProduct.qty,
    0
  );

  useEffect(() => {
    axios.get(`http://localhost:3000/category`).then((response) => {
      setCategories(response.data.categories);
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 1;
      if (scrolled !== isTop) {
        setIsTop(scrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isTop]);

  return (
    <Navbar
      data-bs-theme="dark"
      expand="lg"
      className={`mynavbar ${isTop ? "my-navbar-bg" : "my-navbar-bg"}`}
    >
      <div className="container justify-content-end">
        <Navbar.Brand as={NavLink} to="/" className="mynavbarlogo p-0 m-0">
          <img
            src={logo}
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
              <NavDropdown title="Categoría" id="basic-nav-dropdown">
                {categories &&
                  categories.map((category) => (
                    <NavDropdown.Item
                      key={category._id}
                      as={NavLink}
                      to={`/categoria/${category.slug}`}
                    >
                      {category.name}
                    </NavDropdown.Item>
                  ))}
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>

        <div className="navbar-icons-position ms-3 position-relative">
          <div className="d-inline-block me-3">
            <Nav.Link as={NavLink} to="/login">
              <i className="fa-solid fa-user navbar-icons"></i>
            </Nav.Link>
          </div>

          <div className="d-inline-block">
            <Nav.Link as={NavLink} to="/carrito">
              <i className="fa-sharp fa-solid fa-cart-shopping navbar-icons"></i>
              {totalProducts > 0 && (
                <span className="notEmpty d-inline-block text-center">
                  {totalProducts}
                </span>
              )}
            </Nav.Link>
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
