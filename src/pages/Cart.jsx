import React from "react";
import MyNavbar from "../components/MyNavbar";

function Cart() {
  return (
    <>
      <MyNavbar />
      <section>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Carrito</h1>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
