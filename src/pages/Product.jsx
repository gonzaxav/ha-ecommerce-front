import MyNavbar from "../components/MyNavbar";

function Product() {
  return (
    <>
      <MyNavbar />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-6">
                <img src="img/cafe.png"></img>
            </div>
            <div className="col-6">
                <h1>Nombre cafe</h1>
                <h6>Product description is here.</h6>
                <h4>$500</h4>
                <p>- 1 +</p>
                <button>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
