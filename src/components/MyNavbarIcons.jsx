import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

function MyNavbarIcons({classes, totalProducts}) {
  return (
    <>
      <div className={`${classes} ms-3 position-relative`}>
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
    </>
  );
}

export default MyNavbarIcons;
