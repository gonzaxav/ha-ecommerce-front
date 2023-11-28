import MyNavbar from "../components/MyNavbar";
function Category() {
  return (
    <>
      <MyNavbar />
      <section>
        <div className="container">
          <div className="row">
            <h1>Café</h1>
          </div>
          <div className="row">
            <div className="col-4">
              <img src="img/cafe.png"></img>
              <h6>Product description is here.</h6>
              <h4>$500</h4>
              <img src="img/cafe.png"></img>
              <h6>Product description is here.</h6>
              <h4>$500</h4>
            </div>
            <div className="col-4">
              <img src="img/cafe.png"></img>
              <h6>Product description is here.</h6>
              <h4>$500</h4>
              <img src="img/cafe.png"></img>
              <h6>Product description is here.</h6>
              <h4>$500</h4>
            </div>
            <div className="col-4">
              <img src="img/cafe.png"></img>
              <h6>Product description is here.</h6>
              <h4>$500</h4>
              <img src="img/cafe.png"></img>
              <h6>Product description is here.</h6>
              <h4>$500</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
