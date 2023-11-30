import MyNavbar from "../components/MyNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Product.css";
import "swiper/css";
import "swiper/css/navigation";

function Product() {
  const [itemAmount, setItemAmount] = useState(0);
  const plusItem = () => itemAmount < 5 && setItemAmount(itemAmount + 1);
  const minusItem = () => itemAmount > 0 && setItemAmount(itemAmount - 1);
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/featured`).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    <>
      <MyNavbar />
      <section className="h-100 pt-4 pb-5 light ">
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
                <div className="mb-5">
                  <div className="mb-3">
                    <button onClick={minusItem} className="border-0 plus-item">
                      -
                    </button>
                    <span className="mx-1 fs-6 border px-2 py-1 rounded">
                      {itemAmount}
                    </span>
                    <button onClick={plusItem} className="border-0 plus-item">
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
      <div className="position-relative" >
        <img className="cat-product" src="/img/gatito product.png" alt="gatito" />
      </div>
      <section className="cream pt-2 pb-5 product">
        <div className="container">
          <div className="row">
            <div className="col-12 mt-5">
              <h3 className="text-center mb-5">Otros productos relacionados</h3>
              <div className="row justify-content-center w-75">
                <Swiper
                  modules={[Navigation, A11y]}
                  spaceBetween={0}
                  slidesPerView={3}
                  navigation
                  loop
                  className="mb-5"
                >
                  {products &&
                    products.map((product, index) => (
                      <SwiperSlide key={index}>
                        <div className="col-4 best-seller-img">
                          <img
                            className="b-seller-img"
                            src={apiUrl + "img/" + product.photo[0]}
                          ></img>
                          <h4 className="text-center mt-3">{product.name}</h4>
                          <p className="text-center mt-3">
                            {product.description}
                          </p>
                          <h6 className="text-center mt-3">${product.price}</h6>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <img className="product-footer-cat" src="/img/gatito3.png" alt="gatito footer" />
      </div>
      <Footer/>
    </>
  );
}

export default Product;
