import "./Footer.css";

function Footer() {
  return (
   
    <footer className="bg-dark text-white pt-3">
      <div id="footer-container" className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mt-2">
            <img className="foto-footer" src="img/logo_footer.png" alt="" />
          </div>
          <div className="col-md-6 col-lg-3">
            <p>Cocina y café de especialidad</p>
            <p>Martes a Viernes 9 a 19 hs</p>
            <p>Sábados 10 a 19 hs</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <p>Home</p>
            <p>Acerca del proyecto</p>
            <p>Carrito</p>
            <p>Producto</p>
            <p>Categoría</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <p>Contacto:</p>
            <p>
              <i className="bi bi-telephone"></i> 099 437 052
            </p>

            <p>
              <i className="bi bi-geo-alt-fill"></i> Encina 1663, Palermo,
              Montevideo
            </p>
            <p>
              <i className="bi bi-instagram"> @casa_de_abajo</i>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
