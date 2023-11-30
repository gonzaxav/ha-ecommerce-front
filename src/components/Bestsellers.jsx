import "./Bestsellers.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function Bestsellers() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;

  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/featured`).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  return (
    products && (
      <section className="cream py-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <h2 className="text-center">Destacados</h2>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit!
                </p>
              </div>
              <div className="row justify-content-center">
                <Swiper
                  modules={[Navigation, A11y]}
                  spaceBetween={0}
                  slidesPerView={3}
                  navigation
                  loop
                >
                  {products.map((product, index) => (
                    <SwiperSlide key={index}>
                      <div className="col-4 best-seller-img">
                        <img
                          className="b-seller-img"
                          src={apiUrl + "img/" + product.photo[0]}
                        ></img>
                        <h4 className="text-center mt-3">
                          {product.name}
                        </h4>
                        <p className="text-center mt-3">
                          {product.description}
                        </p>
                        <h6 className="text-center mt-3">
                          ${product.price}
                        </h6>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default Bestsellers;
