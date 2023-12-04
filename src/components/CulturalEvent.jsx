import "./CulturalEvent.css";

function CulturalEvent() {
  return (
    <>
      <section className="dark py-section bg-img-event d-flex flex-row align-items-center">
        <div className="container">
          <div className="col-12">
            <h2 className="mb-0">
              <span className="black h2">&nbsp;</span>Tienes
              <span className="black h2">&nbsp;</span>un
            </h2>
            <h2>
              evento?<span className="black h2">&nbsp;</span>
            </h2>
          </div>
          <div className="col-6 col-sm-6 col-md-5">
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
            <div className="col-6 img" style={{backgroundImage: "url(img/cafe.png)"}}>
            </div>
            <div className="col-6 py-5 d-flex flex-column justify-content-center">
              <h2>Nosotros somos</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                adipisci neque inventore itaque iusto laborum, sint porro
                expedita quidem quis corporis? Rerum iure ex minima ratione
                nostrum sequi in necessitatibus.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6 py-5 d-flex flex-column justify-content-center">
              <h2>Lorem, ipsum dolor.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
                adipisci neque inventore itaque iusto laborum, sint porro
                expedita quidem quis corporis? Rerum iure ex minima ratione
                nostrum sequi in necessitatibus.
              </p>
            </div>
            <div className="col-6 img" style={{backgroundImage: "url(img/cafe.png)"}}>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CulturalEvent;
