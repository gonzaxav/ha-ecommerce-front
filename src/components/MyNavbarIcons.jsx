import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/clientSlice";

function MyNavbarIcons({ classes, totalProducts }) {

  const client = useSelector((state)=>state.client)
  const dispatch = useDispatch();
  const handleLogout = ()=> dispatch(logout())

  return (
    <>
      <div className={`${classes} ms-3 position-relative`}>
        <div className={client ? "d-none" : "d-inline-block me-4"}>
          <Nav.Link as={NavLink} to="/login">
            <i className="fa-solid fa-user navbar-icons"></i>
          </Nav.Link>
        </div>
        <div className={client ? "d-inline-block me-3 logout-icon" : "d-none"}>
          <i onClick={handleLogout} class="fa-solid fa-arrow-right-from-bracket text-white fs-3"></i>
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
