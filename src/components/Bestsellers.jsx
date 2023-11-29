import { useEffect, useState } from "react";
import axios from "axios";

function Bestsellers() {
  const apiUrl = import.meta.env.VITE_BASE_URL_API;

  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/featured`).then((response) => {
      setProducts(response.data.products);
      console.log(response.data.products);
    });
  }, []);

  return (
    products && (
      <section className="light py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="text-center">Destacados</h2>
              <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                obcaecati!
              </p>
              <div className="row justify-content-center">
                {products.map((product, index) => (
                  <div key={index} className="col-4 best-seller-img m-2">
                    <p className="fw-semibold fs-5">{product.name}</p>
                    <img className="b-seller-img" src={apiUrl + "img/" + product.photo[0]}></img>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default Bestsellers;
