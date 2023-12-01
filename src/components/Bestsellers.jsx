import "./Bestsellers.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

function Bestsellers() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();

  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/featured`).then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  const handleRedirect = (page, route) => {
    navigate(`${page}/${route}`);
  };

  const handleAddProduct = () => {
    
  };

  return (
    products && (
      <section className="cream py-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="mb-5">
                <h2 className="text-center">
                  <span className="black h2">&nbsp;</span>Destacados
                  <span className="black h2">&nbsp;</span>
                </h2>
                <h5 className="text-center">
                  Échale un vistazo a nuestros productos más vendidos!
                </h5>
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
                      <div className="d-flex flex-column myProductDiv">
                        <img
                          className="b-seller-img cursor-pointer"
                          src={apiUrl + "img/" + product.photo[0]}
                          onClick={() => handleRedirect("producto", product.slug)}
                        ></img>
                        <h4 className="text-center mt-3">{product.name}</h4>
                        <p className="text-center mt-3">
                          {product.description}
                        </p>
                        <h5 className="text-center mt-3">$U {product.price}</h5>
                        <button
                          className="mx-auto btn btn-dark"
                          onClick={() => handleAddProduct()}
                        >
                          ADD TO CART
                        </button>
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
