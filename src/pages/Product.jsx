import MyNavbar from "../components/MyNavbar";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import "./Product.css";
import gatitoProduct from "../img/gatito product.png";
import gatitoFooter from "../img/gatito3.png";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/orderSlice";
import CarouselProducts from "../components/CarouselProducts";

function Product() {
  const supabaseUrl = import.meta.env.VITE_BASE_URL_SUPABASE;
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [itemAmount, setItemAmount] = useState(1);
  const [products, setProducts] = useState(null);
  const [product, setProduct] = useState(null);
  const [productsAmount, setProductsAmount] = useState(
    window.innerWidth < 768 ? 1 : 3
  );

  const handleResize = () => {
    setProductsAmount(window.innerWidth < 768 ? 1 : 3);
  };

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        productId: product._id,
        name: product.name,
        photo: product.photo,
        price: product.price,
        slug: product.slug,
        qty: itemAmount,
        stock: product.stock,
      })
    );
  };

  useEffect(() => {
    axios.get(`http://localhost:3000/products?featured`).then((response) => {
      setProducts(response.data.products);
    });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    axios.get(`http://localhost:3000/products/${slug}`).then((response) => {
      setProduct(response.data.product);
      window.scrollTo(0, 0);
    });
  }, [slug]);

  const plusItem = () =>
    itemAmount < 9 &&
    itemAmount < product.stock &&
    setItemAmount(itemAmount + 1);
  const minusItem = () => itemAmount > 0 && setItemAmount(itemAmount - 1);

  return products && (
    <>
      <MyNavbar />
      <section className="pt-5 pb-5 light ">
        <div className="container pt-3">
          {product && (
            <div className="row">
              <div className="col-12 col-md-6 overflow-hidden d-flex justify-content-center pt-5 pe-4">
                <img
                  className="productpage-img"
                  src={supabaseUrl + "img/" + product.photo[0]}
                ></img>
              </div>
              <div className="col-12 col-md-6 py-3 px-4 d-flex flex-column justify-content-between">
                <div>
                  <h1 className="fw-semibold mb-4 mt-3">{product.name}</h1>
                  <h5 className="mb-3">{product.shortDescription}</h5>
                  <h6 className="mb-4 pe-5 fw-medium">{product.description}</h6>
                </div>
                <div className="mb-2">
                  <h4 className="mb-2 pb-2">$U{product.price}</h4>
                  <p className="mb-3">
                    stock:
                    {product.stock >= 9
                      ? " En stock"
                      : ` Solo ${product.stock} disponible/s`}
                  </p>
                  <div className="mb-3">
                    <div className="mb-3">
                      <button
                        onClick={minusItem}
                        className="border-0 plus-item"
                      >
                        -
                      </button>
                      <span className="mx-1 fs-6 border px-2 py-1 rounded">
                        {itemAmount}
                      </span>
                      <button onClick={plusItem} className="border-0 plus-item">
                        +
                      </button>
                    </div>
                    <button
                      onClick={handleAddProduct}
                      className="btn btn-light add-cart-btn px-4 py-3 "
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
      <div className="position-relative">
        <img className="cat-product" src={gatitoProduct} alt="gatito" />
      </div>
      <section className="cream pt-2 pb-5 product">
        <div className="container pb-5">
          <div className="row pb-5">
            <div className="col-12 mt-5">
              <h3 className="text-center mb-5 fw-semibold">
                Otros productos relacionados
              </h3>
              <CarouselProducts
                products={products}
                productsAmount={productsAmount}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <img
          className="product-footer-cat"
          src={gatitoFooter}
          alt="gatito footer"
        />
      </div>
      <Footer />
    </>
  );
}

export default Product;
