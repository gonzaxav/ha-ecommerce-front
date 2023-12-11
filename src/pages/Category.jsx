import MyNavbar from "../components/MyNavbar";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import "./Category.css";
import { useDispatch } from "react-redux";
import {addProduct} from "../redux/orderSlice"

function Category() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const { slug } = useParams();
  const [products, setProducts] = useState(null);
  const [category, setCategory] = useState(null);
  const dispatch = useDispatch();

const handleGoToProduct = (product)=> navigate(`/producto/${product.slug}`)

  const handleAddProduct = (product) => {
    dispatch(addProduct({
        productId: product._id,
        name: product.name,
        photo: product.photo,
        price: product.price,
        slug: product.slug,
        qty: 1,
        stock: product.stock,
    }))
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?slug=${slug}`)
      .then((response) => {
        setProducts(response.data.products);
        window.scrollTo(0, 0);
      });
  }, [slug]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/category/${slug}`)
      .then((response) => {
        setCategory(response.data.category);
      });
  }, [slug]);

  return (
    <>
      <MyNavbar />
      <section className="pt-5 cream py-section">
        <div className="container pt-4">
          <div className="row">
            <h1 className=" col-12 titulo-categoria fw-semibold mb-5 mt-3 ">
              {category && category.name}
            </h1>

            {products &&
              products.map((product) => (
                <div
                  id="category-producto"
                  key={product._id}
                  className="col-sm-12 col-md-6 col-lg-4"
                >
                  <img
                    onClick={ ()=>handleGoToProduct(product)}
                    className="img-categoria"
                    src={apiUrl + "img/" + product.photo}
                  ></img>
                  <h6 className="descripcion-categoria">
                    {product.shortDescription}
                  </h6>
                  <h4 className="precio-categoria">${product.price}</h4>
                  <button onClick={()=> handleAddProduct(product)} className=" agregar btn btn-light add-cart-btn">
                    Agregar al carrito
                  </button>
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
