import { useEffect, useState } from "react";
import "./MyNavbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../img/logo_2.png";
import { useSelector } from "react-redux";
import MyNavbarIcons from "./MyNavbarIcons";

function MyNavbar() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const [isTop, setIsTop] = useState(true);
  const [categories, setCategories] = useState(null);
  const order = useSelector((state) => state.order);
  const navigate = useNavigate();
  const totalProducts = order.reduce(
    (acumulator, currentProduct) => acumulator + currentProduct.qty,
    0
  );

  useEffect(() => {
    axios.get(`${apiUrl}category`).then((response) => {
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
      <div className="container myNavbar justify-content-end">
        <Navbar.Brand as={NavLink} to="/" className="mynavbarlogo">
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

        <MyNavbarIcons classes={"d-block d-lg-none"} totalProducts={totalProducts} />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 d-flex text-end justify-content-center gap-4">
            <div className="d-flex justify-content-end">
              <Nav.Link as={NavLink} to="/sobre-el-proyecto">
                Acerca del proyecto
              </Nav.Link>
            </div>

            <div className="d-flex justify-content-end">
              <NavDropdown title="Categorías" id="basic-nav-dropdown">
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

        <MyNavbarIcons classes={"d-none d-lg-block"} totalProducts={totalProducts} />
      </div>
      <div className="about-us-icon rounded-start" onClick={()=>navigate("/sobre-el-proyecto")}>
        {/* <i className="fa-solid fa-users text-white fs-2 ms-1"></i> */}
        <span className="text-white d-block icon-text">Este</span>
        <span className="text-white d-block icon-text">proyecto</span>
      </div>
    </Navbar>
  );
}

export default MyNavbar;
