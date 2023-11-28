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
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Destacados</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
                obcaecati!
              </p>
              <div className="row">
                {products.map((product) => (
                  <div className="col-4">
                    <h3>{product.name}</h3>
                    <img src={apiUrl + "img/" + product.photo[0]}></img>
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
