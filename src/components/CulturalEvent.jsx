import "./CulturalEvent.css";
import { Toaster, toast } from 'sonner';

function CulturalEvent() {

  const handleOnclick = ()=>{
    toast.error("Lo sentimos, esta funcionalidad queó por fuera del alcance del proyecto",{
      position: "top-right",
      duration: 5000,
    })
  }
  return (
    <>
    <Toaster richColors/>
      <section className="dark py-section bg-img-event d-flex flex-row align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 g-sm-0">
              <h2 className="mb-0">
                <span className="black h2">&nbsp;</span>Tienes
                <span className="black h2">&nbsp;</span>un
                <span className="black h2">&nbsp;</span>
              </h2>
              <h2>
                <span className="black h2">&nbsp;</span>evento?
                <span className="black h2">&nbsp;</span>
              </h2>
            </div>
            <div className="col-6 col-sm-6 col-md-5 g-sm-0">
              <p>
                ¡Descubre cómo hacer de tu evento algo inolvidable! Haz clic en
                el siguiente botón y encuentra toda la información que necesitas
                para planificar y personalizar tu celebración.
              </p>
              <button onClick={handleOnclick} className="btn btn-light">Quiero saber mas</button>
            </div>
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
            <div className="nosotrosSomos-text col-12 col-md-6 py-5 d-flex flex-column justify-content-center g-sm-0">
              <div className="d-none d-lg-block">
                <h2>
                  <span className="black h2">&nbsp;</span>Nosotros
                  <span className="black h2">&nbsp;</span>somos
                  <span className="black h2">&nbsp;</span>
                </h2>
              </div>

              <div className="d-block d-lg-none">
                <h2 className="mb-0">
                  <span className="black h2">&nbsp;</span>Nosotros
                  <span className="black h2">&nbsp;</span>
                </h2>
                <h2 className="mb-4">
                  <span className="black h2">&nbsp;</span>somos
                  <span className="black h2">&nbsp;</span>
                </h2>
              </div>

              <p>
                ¡Bienvenidos a Apartamento de arriba, donde cada taza cuenta una
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
            <div className="mision col-12 col-md-6 py-5 d-flex flex-column justify-content-center g-sm-0">
              <div className="d-none d-lg-block">
                <h2>
                  <span className="black h2">&nbsp;</span>Nuestra
                  <span className="black h2">&nbsp;</span>misión.
                  <span className="black h2">&nbsp;</span>
                </h2>
              </div>
              <div className="d-block d-lg-none">
                <h2 className="mb-0">
                  <span className="black h2">&nbsp;</span>Nuestra
                  <span className="black h2">&nbsp;</span>
                </h2>
                <h2 className="mb-4">
                  <span className="black h2">&nbsp;</span>misión.
                  <span className="black h2">&nbsp;</span>
                </h2>
              </div>
              <p>
                Con cada taza de Apartamento de arriba, te invitamos a ser parte de
                nuestra historia. Queremos ser el lugar donde encuentres tu
                refugio diario, donde las conversaciones fluyan tan libremente
                como el café. Nuestra misión es crear momentos memorables y ser
                un punto de encuentro para la comunidad.
              </p>
              <p>
                Gracias por ser parte de nuestra historia. ¡Esperamos verte
                pronto en Apartamento de arriba!
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
