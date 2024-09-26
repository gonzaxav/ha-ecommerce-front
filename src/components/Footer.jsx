import "./Footer.css";
import logoFooter from "../img/logo_footer.png"
import gatito from "../img/gatito9-footer.png"

function Footer() {
  return (
    <footer className="dark text-white pt-3">
      <div id="footer-container" className="container">
        <div className="row">
          <div className="logo-footer col-md-6 col-lg-3 g-sm-0">
            <img className="foto-footer" src={logoFooter} alt="Logo footer" />
          </div>
          <div className="col-footer col-md-6 col-lg-4">
            <p>Cocina y café de especialidad</p>
            <p>Martes a Viernes 9 a 19 hs</p>
            <p>Sábados 10 a 19 hs</p>
            <p>Los esperamos!</p>
          </div>

          <div className="col-md-6 col-lg-3">
            <p>Contacto:</p>
            <p>
              <i className="bi bi-telephone"></i> <a className="tel" href="tel:099 437 052">099 437 052</a>
            </p>

            <p>
              <i className="bi bi-geo-alt-fill"></i>{" "}
              <a className="ubicacion text-decoration-none"
                href=""
                target="blank"
              >
                Encina 1663, Palermo, Montevideo
              </a>
            </p>
            <p>
              <i className="bi bi-instagram"></i>{" "}
              <a className="instagram text-decoration-none" href="" target="blank">
                @apartamento_de_arriba
              </a>
            </p>
          </div>
          <div className="col-md-6 col-lg-2 d-flex">
            <img
              className="gatito-footer ms-auto"
              src={gatito}
              alt="img-gatito"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
