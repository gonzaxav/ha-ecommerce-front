import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import "./CheckOut.css";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import Card from "react-bootstrap/Card";
//import totalProducts from "../components/CartProduct";
//import totalPrice from "../components/CartProduct";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import visa from "../img/logos/Visa-pequeño.svg";
import santander from "../img/logos/santander-logo-15.png";
import paypal from "../img/logos/paypal-logo-2-1.png";
import Mastercard from "../img/logos/Mastercard-pequeño.svg";
import Master from "../img/logos/Maestro-pequeño.svg";
import Amex from "../img/logos/AmericanExpress.svg";
import Brou from "../img/logos/brou.png";

import { useDispatch } from "react-redux";
import axios from "axios";

function CheckOut() {
  const client = useSelector((state) => state.client);
  const order = useSelector((state) => state.order);
  const location = useLocation();

  const [newEmail, setNewEmail] = useState("");
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newTelephone, setNewTelephone] = useState("");
  const [newDeliveryAddress, setNewDeliveryAddress] = useState("");
  const [newTown, setNewTown] = useState("");
  const [newPostcode, setNewPostcode] = useState("");
  const [newCountry, setNewCountry] = useState("");
  //const [newCardNumber, setNewCardNumber] = useState("");
  //const [newNameOfOwner, setNewNameOfOwner] = useState("");
  //const [newExpirationDate, setNewExpirationDate] = useState("");

  const dispatch = useDispatch();

  const totalPrice = order.reduce((acumulator, currentProduct) => {
    const productPrice = currentProduct.price * currentProduct.qty;
    return acumulator + productPrice;
  }, 0);

  const totalProducts = order.reduce(
    (acumulator, currentProduct) => acumulator + currentProduct.qty,
    0
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createClientPay = async () => {
      const response = await axios({
        method: "POST",
        url: "http://localhost:3000/orders",
        data: {
          products: order,
        },
        headers: {
          Authorization: `Bearer ${client}`,
        },
      });
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
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
                id="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                required
                name="email"
              />
              <label htmlFor="firstname" className="form-label">
                Nombre
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
                id="firstname"
                value={newFirstname}
                onChange={(e) => setNewFirstname(e.target.value)}
                required
                name="firstname"
              />
              <label htmlFor="lastname" className="form-label">
                Apellido
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
                id="lastname"
                value={newLastname}
                onChange={(e) => setNewLastname(e.target.value)}
                required
                name="lastname"
              />
              <label htmlFor="telephone" className="form-label">
                Teléfono
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
                id="telephone"
                value={newTelephone}
                onChange={(e) => setNewTelephone(e.target.value)}
                required
                name="telephone"
              />
              <label htmlFor="deliveryAddress" className="form-label">
                Dirección de envío
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
                id="deliveryAddress"
                value={newDeliveryAddress}
                onChange={(e) => setNewDeliveryAddress(e.target.value)}
                required
                name="deliveryAddress"
              />
              <label htmlFor="town" className="form-label">
                Departamento
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
                id="town"
                value={newTown}
                onChange={(e) => setNewTown(e.target.value)}
                required
                name="town"
              />
              <label htmlFor="postcode" className="form-label">
                Código postal
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
                id="postcode"
                value={newPostcode}
                onChange={(e) => setNewPostcode(e.target.value)}
                required
                name="postcode"
              />
              <label htmlFor="country" className="form-label label-checkout">
                País
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
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
              <div >
                
                <input
                  className="check"
                  id="Transferencia"
                  type="radio"
                  name="forma-de-pago"
                  value={"t"}
                />
                <label htmlFor="Transferencia">Transferencia bancaria</label>
                
                <div className="bancos ">
                  <img className="santander-logo" src={santander} alt="logo Santander" />
                  <img className="brou-logo" src={Brou} alt="logo Brou" />
                </div>
              </div>
              <div >
                <input
                  className="check"
                  id="Tarjeta-de-credito "
                  type="radio"
                  name="forma-de-pago"
                  value={"t-c"}
                />
                <label htmlFor="Tarjeta-de-credito">Tarjeta de credito</label>
                <div className="tarjetas">
                  <img className="visa-logo" src={visa} alt="Visa" />
                  <img src={Master} alt="Mster" />
                  <img src={Mastercard} alt="Mastercard" />
                  <img src={Amex} alt="Amex" />
                </div>  
              </div>
              <div >
                <input
                  className="check"
                  id="PayPal"
                  type="radio"
                  name="forma-de-pago"
                  value={"p"}
                />
                <label htmlFor="PayPal">PayPal</label>
                <div className="paypal-logo">
                <img className="paypal-img" src={paypal} alt="" />
                </div>
              </div>

              <label htmlFor="cardNumber" className="form-label label-checkout">
                Nº de tarjeta
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
                id="cardNumber"
                //value={newCardNumber}
                //onChange={(e) => setNewCountry(e.target.value)}
                //required
                name="cardNumeber"
              />
              <label
                htmlFor="nameOfOwner"
                className="form-label label-checkout"
              >
                Nombre del titular
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
                id="nameOfOwner"
                //value={newNameOfOwner}
                //onChange={(e) => setNewCountry(e.target.value)}
                //required
                name="nameOfOwner"
              />
              <label
                htmlFor="expirationDate"
                className="form-label label-checkout"
              >
                Fecha de expiración
              </label>
              <input
                className="form-control form-field field-margin"
                type="text"
                
                id="expirationDate"
                //value={newExpirationDate}
                //onChange={(e) => setNewCountry(e.target.value)}
                //required
                name="expirationDate"
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
                <button className="btn-pagar" type="submit">
                  Pagar
                </button>
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
