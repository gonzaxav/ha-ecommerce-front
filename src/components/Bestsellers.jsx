import "./Bestsellers.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={0}
                  slidesPerView={3}
                  navigation
                  loop
                >
                  {products.map((product, index) => (
                    <SwiperSlide>
                      <div key={index} className="col-4 best-seller-img">
                        <p className="text-center fw-semibold fs-5">
                          {product.name}
                        </p>
                        <img
                          className="b-seller-img"
                          src={apiUrl + "img/" + product.photo[0]}
                        ></img>
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
