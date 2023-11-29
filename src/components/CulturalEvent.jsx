import "./CulturalEvent.css";

function CulturalEvent() {
  return (
    <>
      <section className="dark py-section bg-img-event d-flex flex-row align-items-center">
        <div className="container">
          <div className="col-3">
            <h2>Tienes un evento?</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              possimus debitis fuga, officia incidunt voluptatum?
            </p>
            <button className="btn btn-light">Quiero saber mas</button>
          </div>
        </div>
      </section>

      <section className="cream py-section">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <img src="img/cafe.png"></img>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <h2>Nosotros somos</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                adipisci neque inventore itaque iusto laborum, sint porro
                expedita quidem quis corporis? Rerum iure ex minima ratione
                nostrum sequi in necessitatibus.
              </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-6 d-flex flex-column justify-content-center">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                adipisci neque inventore itaque iusto laborum, sint porro
                expedita quidem quis corporis? Rerum iure ex minima ratione
                nostrum sequi in necessitatibus.
              </p>
            </div>
            <div className="col-6">
              <img src="img/cafe.png"></img>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CulturalEvent;
