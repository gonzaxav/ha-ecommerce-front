import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import "./CheckOut.css";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
import totalProducts from "../components/CartProduct";
import totalPrice from "../components/CartProduct";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function CheckOut() {
  const client = true; //useSelector((state) => state.client);
  const location = useLocation();

  const [newEmail, setNewEmail] = useState("");
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newTelephone, setNewTelephone] = useState("");
  const [newDeliveryAddress, setNewDeliveryAddress] = useState("");
  const [newTown, setNewTown] = useState("");
  const [newPostcode, setNewPostcode] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newPayPal, setNewPayPal] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createClientPay = async () => {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/order",
        data: {
          firstname: newFirstname,
          lastname: newLastname,
          email: newEmail,
          telephone: newTelephone,
          deliveryAddress: newDeliveryAddress,
          town: newTown,
          postcode: newPostcode,
          country: newCountry,
          payPal: newPayPal,
        },
      });
      //dispatch(login(response.data))
      //navigate("/");
    };
    createClientPay();
  };

  return client ? (
    <>
      <MyNavbar />
      <div className="container-general container ">
        <div className="row div-general">
          <div className="col-12">
            <h1 className="titulo">Checkout</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-6 div-envio">
            <h3 className="direccion-titulo">Dirección de envío</h3>
            <p className="campo-obligatorio">
              Todos los campos son obligatorios
            </p>
            <form onSubmit={handleSubmit}>
              <label hidden htmlFor="Email" className="form-label"></label>
              <input
                className="form-control form-field field-margin"
                type="text"
                placeholder="Email"
                id="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
                name="email"
              />
              <label hidden htmlFor="firstname" className="form-label"></label>
              <input
                className="form-control form-field field-margin"
                type="text"
                placeholder="Nombre"
                id="firstname"
                value={newFirstname}
                onChange={(e) => setNewFirstname(e.target.value)}
                required
                name="firstname"
              />
              <label hidden htmlFor="lastname" className="form-label"></label>
              <input
                className="form-control form-field field-margin"
                type="text"
                placeholder="Apellido"
                id="lastname"
                value={newLastname}
                onChange={(e) => setNewLastname(e.target.value)}
                required
                name="lastname"
              />
              <label hidden htmlFor="telephone" className="form-label"></label>
              <input
                className="form-control form-field field-margin"
                type="text"
                placeholder="Teléfono"
                id="telephone"
                value={newTelephone}
                onChange={(e) => setNewTelephone(e.target.value)}
                required
                name="telephone"
              />
              <label
                hidden
                htmlFor="deliveryAddress"
                className="form-label"
              ></label>
              <input
                className="form-control form-field field-margin"
                type="text"
                placeholder="Dirección de envío"
                id="deliveryAddress"
                value={newDeliveryAddress}
                onChange={(e) => setNewDeliveryAddress(e.target.value)}
                required
                name="deliveryAddress"
              />
              <label hidden htmlFor="town" className="form-label"></label>
              <input
                className="form-control form-field field-margin"
                type="text"
                placeholder="Departamento"
                id="town"
                value={newTown}
                onChange={(e) => setNewTown(e.target.value)}
                required
                name="town"
              />
              <label hidden htmlFor="postcode" className="form-label"></label>
              <input
                className="form-control form-field field-margin"
                type="text"
                placeholder="Código postal"
                id="postcode"
                value={newPostcode}
                onChange={(e) => setNewPostcode(e.target.value)}
                required
                name="postcode"
              />
              <label hidden htmlFor="country" className="form-label"></label>
              <input
                className="form-control form-field field-margin"
                type="text"
                placeholder="País"
                id="country"
                value={newCountry}
                onChange={(e) => setNewCountry(e.target.value)}
                required
                name="country"
              />
            </form>
          </div>

          <div className="col-md-12 col-lg-6">
            <div className="div-pago">
              <h3 className="metodo-titulo">Método de pago</h3>

              <label hidden htmlFor="Card" className="form-label"></label>
              <input
                className="form-control form-field field-margin"
                type="text"
                placeholder="Tarjeta"
                id="Card"
                //value="Card"
                name="Card"
              />
              <label hidden htmlFor="payPal" className="form-label"></label>
              <input
                className="form-control form-field field-margin"
                type="text"
                placeholder="PayPal"
                id="payPal"
                value={newPayPal}
                onChange={(e) => setNewPayPal(e.target.value)}
                required
                name="payPal"
              />
            </div>
            <div className="div-resumen">
              <Card className="card-resumen">
                <Card.Body>
                  <Card.Title>
                    <h3 className="resumen-titulo">Resumen</h3>
                  </Card.Title>
                  <div>
                    <p className="p-carrito p-subtotal">
                      Subtotal ({totalProducts}):{" "}
                    </p>
                    <h3 className="h3-carrito">$U {totalPrice}</h3>
                  </div>
                </Card.Body>
              </Card>
            </div>
            <div>
              <div className="btn-pago">
                <button className="btn-pagar">Pagar</button>
              </div>
            </div>
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
