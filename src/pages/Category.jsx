import MyNavbar from "../components/MyNavbar";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import "./Category.css";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/orderSlice";

function Category() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const supabaseUrl = import.meta.env.VITE_BASE_URL_SUPABASE;
  const navigate = useNavigate();
  const { slug } = useParams();
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();

  const handleGoToProduct = (product) => navigate(`/producto/${product.slug}`);

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

  useEffect(() => {
    axios.get(`${apiUrl}products?slug=${slug}`).then((response) => {
      setProducts(response.data.products);
      window.scrollTo(0, 0);
    });
  }, [slug]);

  useEffect(() => {
    axios.get(`${apiUrl}category/${slug}`).then((response) => {
      setCategory(response.data.category);
    });
  }, [slug]);

  return (
    <>
      <MyNavbar />
      <section className="pt-5 cream py-section">
        <h1 className="titulo-categoria py-3 mt-3 mb-5">{category && category.name}</h1>

        <div className="container pt-4">
          <div className="row">
            {products &&
              products.map((product) => (
                <div
                  key={product._id}
                  className="category-producto col-sm-12 col-md-6 col-lg-4 mb-5"
                >
                  <div className="div-category">
                    <div className="div-img-categoria mx-auto">
                      <img
                        onClick={() => handleGoToProduct(product)}
                        className="img-categoria cursor-pointer"
                        src={supabaseUrl + "img/" + product.photo}
                      ></img>
                    </div>
                    <h4 className="nombre-categoria mt-3">{product.name}</h4>
                    <p className="mt-3">{product.shortDescription}</p>
                    <h5 className="precio-categoria mb-3">$U {product.price}</h5>
                    <button
                      onClick={() => handleAddProduct(product)}
                      className="btn btn-orange-light add-cart-btn mb-4"
                    >
                      Agregar al carrito
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Category;
