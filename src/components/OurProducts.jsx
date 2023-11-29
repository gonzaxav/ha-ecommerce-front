import "./OurProducts.css";

function OurProducts() {
  return (
    <section className="light py-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-center mb-5">Nuestros productos</h2>
            <div className="row">
              <div className="col-4 my-4">
                <div className="overflow-hidden">
                  <img
                    className="w-100 ourProductsImg"
                    src="img/cafe.png"
                  ></img>
                </div>
              </div>
              <div className="col-4 my-4">
                <div className="overflow-hidden">
                  <img
                    className="w-100 ourProductsImg"
                    src="img/cafe.png"
                  ></img>
                </div>
              </div>
              <div className="col-4 my-4">
                <div className="overflow-hidden">
                  <img
                    className="w-100 ourProductsImg"
                    src="img/cafe.png"
                  ></img>
                </div>
              </div>
              <div className="col-4 my-4">
                <div className="overflow-hidden">
                  <img
                    className="w-100 ourProductsImg"
                    src="img/cafe.png"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurProducts;
