import MyNavbar from "../components/MyNavbar";
import "./Product.css";
import { useState } from "react";

function Product() {
  const [itemAmount, setItemAmount] = useState(0);
  const plusItem = () => setItemAmount(itemAmount + 1);
  const minusItem = () => setItemAmount(itemAmount - 1);
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  return (
    <>
      <MyNavbar />
      <section className="vh-100 pt-5 light">
        <div className="container ">
          <div className="row">
            <div className="col-6 overflow-hidden d-flex justify-content-center">
              <img
                className="productpage-img"
                src={apiUrl + "img/vialetti.png"}
              ></img>
            </div>
            <div className="col-6 p-3 d-flex flex-column justify-content-between">
              <div>
                <h1 className="fw-semibold mb-5">Cafetera Italiana</h1>
                <h6 className="mb-4 pe-5 fw-medium">
                  Product description is here. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Omnis harum aut ut minima eum
                  molestias doloremque voluptatum beatae consequatur. Deleniti.
                </h6>
              </div>
              <div className="mb-2">
                <h4 className="mb-4 pb-3">$500</h4>
                <div className="mb-4">
                  <div className="mb-3">
                    <button
                      onClick={itemAmount > 0 && minusItem}
                      className="border-0 plus-item"
                    >
                      -
                    </button>
                    <span className="mx-1 fs-6 border px-2 py-1 rounded">
                      {itemAmount}
                    </span>
                    <button
                      onClick={itemAmount < 5 && plusItem}
                      className="border-0 plus-item"
                    >
                      +
                    </button>
                  </div>
                  <button className="btn btn-light add-cart-btn px-4 py-3">
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
