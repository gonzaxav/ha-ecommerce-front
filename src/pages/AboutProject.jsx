import React from "react";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import "./AboutProject.css";
import html from "../img/logos/html-1.svg";
import css from "../img/logos/css-3.svg";
import bootstrap from "../img/logos/bootstrap-5-1.svg";
import node from "../img/logos/nodejs-icon.svg";
import js from "../img/logos/javascript-1.svg";
import git from "../img/logos/git-icon.svg";
import react from "../img/logos/react-2.svg";
import github from "../img/logos/github-icon-2.svg";
import redux from "../img/logos/redux.svg";
import mongo from "../img/logos/mongodb-icon-1.svg";
import insomnia from "../img/logos/insomnia-logo.svg";
import diagrama from "../img/diagrama.png";
import mer from "../img/MER.png";

function AboutProject() {
  return (
    <>
      <MyNavbar />
      <section className="dark2">
        <div className="cafeenmesa">
          <div className="container">
            <div className="row bienvenido">
              <div className="bienvenida col-12 col-sm-6 g-sm-0">
                <h3 className="mb-4 invitacion">
                  Te invitamos a conocer más sobre el proyecto.
                </h3>
                <p className="">
                  Este es el resultado del trabajo y aprendizaje de estudiantes
                  del{" "}
                  <span className="fw-bold">
                    Coding Bootcamp de Hack Academy
                  </span>{" "}
                  el cual tiene una duración de{" "}
                  <span className="fw-bold">3 meses</span>, con una carga
                  horaria de <span className="fw-bold">más de 600 horas</span>{" "}
                  prácticas, de las cuales dedicamos{" "}
                  <span className="fw-bold">150</span> a dar vida a este
                  e-commerce, para crear el espacio virtual de una cafetería
                  real de Montevideo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark">
        <div className="container">
          <div className="row">
            <div className="col-12 g-sm-0 mt-5">
              <p className="mb-4">
                A lo largo del bootcamp, profundizamos en una amplia gama de{" "}
                <span className="fw-bold">tecnologías</span> que abarcan el
                desarrollo tanto de <span className="fw-bold">backend</span>{" "}
                como de <span className="fw-bold">frontend</span>. También
                adquirimos experiencia práctica con{" "}
                <span className="fw-bold">bases de datos</span> y aprovechamos
                herramientas prácticas para optimizar nuestro flujo de trabajo.
              </p>
              <p className="mb-4">
                Utilizamos <span className="fw-bold">Github</span> como nuestra
                principal plataforma de colaboración y control de versiones.{" "}
                <span className="fw-bold">Discord</span> jugó un papel crucial
                para facilitar una comunicación fluida.
              </p>
              <p className="mb-4">
                Para este proyecto, seleccionamos cuidadosamente el siguiente
                conjunto de herramientas para aumentar nuestra productividad:
              </p>
            </div>
            <div className="col-12 g-sm-0 d-flex gap-6 flex-wrap justify-content-center py-5">
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-logo mb-2" src={html} alt="html logo" />
                <p className="text-center fw-bold m-0">HTML</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-logo mb-2" src={css} alt="css logo" />
                <p className="text-center fw-bold m-0">CSS</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img
                  className="img-logo mb-2"
                  src={bootstrap}
                  alt="bootstrap logo"
                />
                <p className="text-center fw-bold m-0">Bootstrap</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-logo mb-2" src={js} alt="js logo" />
                <p className="text-center fw-bold m-0">JavaScript</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-logo mb-2" src={mongo} alt="mongo logo" />
                <p className="text-center fw-bold m-0">MongoDB</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-logo mb-2" src={node} alt="node logo" />
                <p className="text-center fw-bold m-0">Node.js</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-logo mb-2" src={react} alt="react logo" />
                <p className="text-center fw-bold m-0">React.js</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-logo mb-2" src={redux} alt="redux logo" />
                <p className="text-center fw-bold m-0">Redux</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img
                  className="img-logo mb-2"
                  src={insomnia}
                  alt="insomnia logo"
                />
                <p className="text-center fw-bold m-0">Insomnia</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-logo mb-2" src={git} alt="git logo" />
                <p className="text-center fw-bold m-0">Git</p>
              </div>
              <div className="d-flex flex-column align-items-center justify-content-center">
                <img className="img-logo mb-2" src={github} alt="github logo" />
                <p className="text-center fw-bold m-0">Github</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="light d-flex flex-column">
        <h5 className="text-center fw-bold mt-5">Flujo de datos</h5>
        <img className="diagrama mx-auto mt-3 mb-5" src={diagrama} />
        <h5 className="text-center fw-bold mt-5">Modelo Entidad Relación</h5>
        <img className="mer mx-auto mt-3 mb-2" src={mer} />
      </section>
      <div className="container">
        <section>
          <div className="diseño row">
            <div className="col-12 col-md-6">
              <h3 className="diseño-titulo">Diseño</h3>
            </div>
            <div className="col-12 col-md-6">
              <p>
                Hemos creado un concepto de tienda de café y artículos
                relacionados, que permite a los usuarios explorar sin
                inconvenientes diversas secciones, descubrir una amplia gama de
                opciones y categorías de productos, y añadir fácilmente sus
                elecciones al carrito para su compra. Además, nuestra plataforma
                incluye dos secciones informativas adicionales para enriquecer
                la experiencia. Una sección está dedicada a proporcionar
                información sobre la cafetería y la otra te guiará sobre cómo
                llevar a cabo eventos culturales en la misma
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section>
          <div className="row">
            <div className="cont-persona col-6 col-md-3">
              <img src="" alt="" />
              <h5>Matias Nin</h5>
              <h6>Full Stack Developer</h6>
              <p>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </p>
            </div>
            <div className="cont-persona col-6 col-md-3">
              <img src="" alt="" />
              <h5>Gonzalo Xavier</h5>
              <h6>Full Stack Developer</h6>
              <p>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </p>
            </div>
            <div className="cont-persona col-6 col-md-3">
              <img src="" alt="" />
              <h5>Alejo Negreira</h5>
              <h6>Full Stack Developer</h6>
              <p>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </p>
            </div>
            <div className="cont-persona col-6 col-md-3">
              <img src="" alt="" />
              <h5>Melanie Rebour</h5>
              <h6>Full Stack Developer</h6>
              <p>
                <i className="bi bi-linkedin"></i>{" "}
                <i className="bi bi-github"></i>
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default AboutProject;
