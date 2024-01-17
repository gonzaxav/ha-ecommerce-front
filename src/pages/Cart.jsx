import "./Cart.css";
import React from "react";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector, useDispatch } from "react-redux";
import CartProduct from "../components/CartProduct";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate = useNavigate();
  const order = useSelector((state) => state.order);
  const totalProducts = order.reduce(
    (acumulator, currentProduct) => acumulator + currentProduct.qty,
    0
  );
  const totalPrice = order.reduce((acumulator, currentProduct) => {
    const productPrice = currentProduct.price * currentProduct.qty;
    return acumulator + productPrice;
  }, 0);

  const goToCheckout = () => navigate("/checkout"); // agregar solo se pueda continuar con totalproducts > 0 con un toast
  const shopLink = ()=> navigate("/")
  return (
    <>
      <MyNavbar />
      <section className="vh-100">
        <div id="container-carrito" className="container">
          <div className="row">
            <div className="col-12 pt-3">
              <h1 className="h1-carrito">Carrito</h1>
            </div>
          </div>
          <div className="row tabla-carrito">
            <div className="col-lg-9">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th scope="col">
                      <h2 className="h2-carrito">
                        Artículos ({totalProducts})
                      </h2>
                    </th>

                    <th scope="col">
                      <h2 className="h2-carrito">Precio</h2>
                    </th>
                    <th scope="col">
                      <h2 className="h2-carrito ">Cantidad</h2>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {totalProducts > 0 ? order.map((product) => (
                    <CartProduct key={product.productId} product={product} />
                  )) : <><h5 className="mt-3">Tu carrito esta vacío </h5> <a className="shop-link cursor-pointer" onClick={shopLink}>Seguir comprando<i className="fa-solid fa-arrow-right shop-link"></i></a></>}
                </tbody>
              </table>
            </div>
            <div className="col-lg-3">
              <Card className="card-resumen">
                <Card.Body>
                  <Card.Title>
                    <h2 className="h2-carrito">Resumen</h2>
                  </Card.Title>
                  <div>
                    <p className="p-carrito">Subtotal ({totalProducts}): </p>
                    <h3 className="h3-carrito">$U {totalPrice}</h3>
                    <hr />
                  </div>
                    <Button
                      className="btn btn-orange-fill btn-continuar"
                      onClick={goToCheckout}
                      disabled = {totalProducts < 1}
                    >
                      CONTINUAR
                    </Button>
                  
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;
