import "./CarouselProducts.css";
import { Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../redux/orderSlice";

function CarouselProducts({ products, productsAmount }) {
  const supabaseUrl = import.meta.env.VITE_BASE_URL_SUPABASE;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleRedirect = (page, route) => {
    navigate(`${page}/${route}`);
  };

  const handleAddProduct = (product) => {
    dispatch(
      addProduct({
        productId: product._id,
        name: product.name,
        photo: product.photo,
        price: product.price,
        slug: product.slug,
        qty: 1,
        stock: product.stock,
      })
    );
  };

  return (
    <div className="row justify-content-center">
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={productsAmount}
        navigation
        loop
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="myProductDiv h-100">
              <div className="d-flex flex-column carouselDiv">
                <div className="carouselImg">
                  <img
                    className="b-seller-img cursor-pointer"
                    src={supabaseUrl + "img/" + product.photo[0]}
                    onClick={() => handleRedirect("producto", product.slug)}
                  ></img>
                </div>
                <h4 className="product-name text-center mt-3">{product.name}</h4>
                <div className="carousel-body">
                  <p className="text-center mt-3">{product.shortDescription}</p>
                </div>
                <h5 className="product-price text-center my-3">$U {product.price}</h5>
                <button
                  className="mx-auto btn btn-orange-light add-cart-btn mb-4"
                  onClick={() => handleAddProduct(product)}
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselProducts;
