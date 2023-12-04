import "./Footer.css";
import logoFooter from "../img/logo_footer.png"
import gatito from "../img/gatito9-footer.png"

function Footer() {
  return (
    <footer className="bg-dark text-white pt-3">
      <div id="footer-container" className="container">
        <div className="row">
          <div className="logo-footer col-md-6 col-lg-3 mt-2">
            <img className="foto-footer" src={logoFooter} alt="Logo footer" />
          </div>
          <div className="col-footer col-md-6 col-lg-3">
            <p>Cocina y café de especialidad</p>
            <p>Martes a Viernes 9 a 19 hs</p>
            <p>Sábados 10 a 19 hs</p>
          </div>

          <div className="col-md-6 col-lg-3">
            <p>Contacto:</p>
            <p>
              <i className="bi bi-telephone"></i> <a className="tel" href="tel:099 437 052">099 437 052</a>
            </p>

            <p>
              <i className="bi bi-geo-alt-fill"></i>{" "}
              <a className="ubicacion text-decoration-none"
                href="https://www.google.com/maps/place/Casa+de+Abajo/@-34.909374,-56.179087,7z/data=!4m6!3m5!1s0x959f81ec89bc3959:0x4c6d06b2a2d3b894!8m2!3d-34.909374!4d-56.1790867!16s%2Fg%2F11ss_36b_h?hl=es&entry=ttu"
                target="blank"
              >
                Encina 1663, Palermo, Montevideo
              </a>
            </p>
            <p>
              <i className="bi bi-instagram"></i>{" "}
              <a className="instagram text-decoration-none" href="https://www.instagram.com/casa_de_abajo/" target="blank">
                @casa_de_abajo
              </a>
            </p>
          </div>
          <div className="col-md-6 col-lg-3">
            <img
              className="gatito-footer"
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
