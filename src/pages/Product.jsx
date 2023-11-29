import MyNavbar from "../components/MyNavbar";
import "./Product.css"
function Product() {
  return (
    <>
      <MyNavbar />
      <section className="vh-100 pt-5 light">
        <div className="container ">
          <div className="row">
            <div className="col-6 overflow-hidden d-flex justify-content-center">
              <img className="productpage-img" src="img/Prensa-francesa.jpg"></img>
            </div>
            <div className="col-6 p-3 d-flex flex-column justify-content-between">
              <div>
              <h1 className="fw-semibold mb-5">Prensa francesa</h1>
              <h6 className="mb-4 pe-5 fw-medium">
                Product description is here. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Omnis harum aut ut minima eum
                molestias doloremque voluptatum beatae consequatur. Deleniti.
              </h6>
              </div>
              <div className="mb-2">
              <h4 className="mb-4 pb-3">$500</h4>
              <form className="mb-4 d-flex align-items-center" action="">
              <select className="rounded p-1 me-3 h-75">
                <option value="1">1</option>
              </select>
              <button className="btn btn-light add-cart-btn">Agregar al carrito</button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
