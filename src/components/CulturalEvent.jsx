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
            ¡Descubre cómo hacer de tu evento algo inolvidable! Haz clic en el siguiente botón y encuentra toda la información que necesitas para planificar y personalizar tu celebración.
            </p>
            <button className="btn btn-light">Quiero saber mas</button>
          </div>
        </div>
      </section>

      <section className="cream py-section">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-md-6 img"
              style={{ backgroundImage: "url(/img/staff-removebg.png)" }}
            ></div>
            <div className="nosotrosSomos-text col-12 col-md-6 py-5 d-flex flex-column justify-content-center">
              <h2>Nosotros somos</h2>
              <p>
                ¡Bienvenidos a Casa de Abajo, donde cada taza cuenta una
                historia y cada detalle está cuidadosamente preparado para tu
                deleite!
              </p>
              <p>
                Comenzamos nuestra travesía con la simple idea de compartir la
                pasión por el café de calidad y la buena compañía. Inspirados
                por la rica tradición cafetera de Montevideo, decidimos abrir
                nuestras puertas para crear un espacio donde los amantes del
                café pudieran disfrutar de momentos especiales.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="mision col-12 col-md-6 py-5 d-flex flex-column justify-content-center">
              <h2>Nuestra misión.</h2>
              <p>
                Con cada taza de Casa de Abajo, te invitamos a ser parte de
                nuestra historia. Queremos ser el lugar donde encuentres tu
                refugio diario, donde las conversaciones fluyan tan libremente
                como el café. Nuestra misión es crear momentos memorables y ser
                un punto de encuentro para la comunidad.
              </p>
              <p>
                Gracias por ser parte de nuestra historia. ¡Esperamos verte
                pronto en Casa de Abajo!
              </p>
            </div>
            <div
              className="col-12 col-md-6 img"
              style={{ backgroundImage: "url(/img/equipo.jpg)" }}
            ></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CulturalEvent;
