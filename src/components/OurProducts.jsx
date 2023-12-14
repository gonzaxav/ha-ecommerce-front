import "./OurProducts.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


function OurProducts() {
  const supabaseUrl = import.meta.env.VITE_BASE_URL_SUPABASE;
  const apiUrl = import.meta.env.VITE_BASE_URL_API;
  const navigate = useNavigate();
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    axios
      .get(`${apiUrl}category`)
      .then((response) => {
        setCategories(response.data.categories);
      });
  }, []);
  const handleOnclick = (categoryName)=>navigate(`/categoria/${categoryName}`)
  return (
    <section className="cream py-section">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-none d-md-block">
              <h2 className="text-center mb-5">
                <span className="black h2">&nbsp;</span>Nuestros
                <span className="black h2">&nbsp;</span>productos
                <span className="black h2">&nbsp;</span>
              </h2>
            </div>
            <div className="d-block d-md-none">
              <h2 className="text-center mb-0">
                <span className="black h2">&nbsp;</span>Nuestros
                <span className="black h2">&nbsp;</span>
              </h2>
              <h2 className="text-center mb-5">
                <span className="black h2">&nbsp;</span>productos
                <span className="black h2">&nbsp;</span>
              </h2>
            </div>
            <div className="row">
              {categories && categories.map((category)=>
                <div key={category._id} onClick={()=> handleOnclick(category.slug)} className="col-6 col-md-4 col-xl-4 my-4">
                <div className="overflow-hidden p-4">
                  <img
                    className="w-100 ourProductsImg"
                    src={`${supabaseUrl}img/${category.photo}`}
                  ></img>
                </div>
                <h4 className="text-center fw-bold">{category.name}</h4>
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
