import MyNavbar from "../components/MyNavbar";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";

function Category() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const {slug} = useParams();
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/category/${slug}`)
      .then((response) => {
        setProducts(response.data.products);
      });
  }, [slug]);
  return (
    <>
      <MyNavbar />
      <section className="pt-5">
        <div className="container pt-4">
          <div className="row">
            <h1>Café</h1>
          </div>
          <div className="row">
            {products &&
              products.map((product) => (
                <div className="col-4">
                  <img src={apiUrl +"img/" + product.photo}></img>
                  <h6>{product.shortDescription}</h6>
                  <h4>${product.price}</h4>
                </div>
              ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default Category;
