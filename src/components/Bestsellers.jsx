import { useEffect, useState } from "react";
import axios from "axios";
import CarouselProducts from "./CarouselProducts";

function Bestsellers() {

  const [productsAmount, setProductsAmount] = useState(
    window.innerWidth < 768 ? 1 : 3
  );
  const [products, setProducts] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products?featured=true`)
      .then((response) => {
        setProducts(response.data.products);
      });

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    // Update customState based on the window width
    setProductsAmount(window.innerWidth < 768 ? 1 : 3);
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
                  ¡Échale un vistazo a nuestros productos más vendidos!
                </h5>
              </div>
              <CarouselProducts products={products} productsAmount={productsAmount} />
            </div>
          </div>
        </div>
      </section>
    )
  );
}

export default Bestsellers;
