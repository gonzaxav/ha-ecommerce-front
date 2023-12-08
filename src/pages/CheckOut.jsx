import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import "./CheckOut.css";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";

function CheckOut() {
  const client = true; //useSelector((state) => state.client);
  const location = useLocation();
  return client ? (
    <>
    <MyNavbar />
      <div className="row div-general">
        <h1 className="titulo">Checkout</h1>
        <div className="col-6 div-envio">
          <h3>Dirección de envío</h3>
          <p>Todos los campos son obligatorios</p>
          <form>
            <label hidden htmlFor="Email" className="form-label"></label>
            <input
              className="form-control form-field"
              type="text"
              placeholder="Email"
              id="email"
             // value="email"
              name="email"
            />
            <label hidden htmlFor="firstname" className="form-label"></label>
            <input
              className="form-control form-field"
              type="text"
              placeholder="Nombre"
              id="firstname"
              //value="firsname"
              name="firstname"
            />
            <label hidden htmlFor="lastname" className="form-label"></label>
            <input
              className="form-control form-field"
              type="text"
              placeholder="Apellido"
              id="lastname"
              //value="lastname"
              name="lastname"
            />
            <label hidden htmlFor="telephone" className="form-label"></label>
            <input
              className="form-control form-field"
              type="text"
              placeholder="Teléfono"
              id="telephone"
              //value="telephone"
              name="telephone"
            />
            <label
              hidden
              htmlFor="delivery address"
              className="form-label"
            ></label>
            <input
              className="form-control form-field"
              type="text"
              placeholder="Dirección de envío"
              id="delivery address"
              //value="delivery address"
              name="delivery address"
            />
            <label hidden htmlFor="Town" className="form-label"></label>
            <input
              className="form-control form-field"
              type="text"
              placeholder="Departamento"
              id="departamento"
              //value="departamento"
              name="departamento"
            />
            <label hidden htmlFor="Postcode" className="form-label"></label>
            <input
              className="form-control form-field"
              type="text"
              placeholder="Código postal"
              id="Postcode"
              //value="Postcode"
              name="Postcode"
            />
            <label hidden htmlFor="Country" className="form-label"></label>
            <input
              className="form-control form-field"
              type="text"
              placeholder="País"
              id="Country"
              //value="Country"
              name="Country"
            />
          </form>
        </div>
        <div className="col-6">
          <div className="div-pago">
            <h3>Método de pago</h3>
            <label hidden htmlFor="Card" className="form-label"></label>
            <input
              className="form-control form-field"
              type="text"
              placeholder="Tarjeta"
              id="Card"
              //value="Card"
              name="Card"
            />
            <label hidden htmlFor="PayPal" className="form-label"></label>
            <input
              className="form-control form-field"
              type="text"
              placeholder="PayPal"
              id="PayPal"
              //value="PayPal"
              name="PayPal"
            />
          </div>
          <div className="div-resumen">
            <h3>Resumen de compra</h3>
          </div>
          <div className="btn-pago">
            <button>Pagar</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Navigate to="/login" state={{ prevUrl: location.pathname }} />
  );
}
export default CheckOut;
