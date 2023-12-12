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

function AboutProject() {
  return (
    <>
      <MyNavbar />
      <div className="div-cafeteria "></div>
      <div className="container">
        <section>
          <div className=" bienvenido row">
            <div className="bienvenida col-12 col-md-6">
              <h2>¡Bienvenido!</h2>
              <h3 className="invitacion">
                Te invitamos a conocer más sobre el proyecto.
              </h3>
            </div>
            <div className="col-12 col-md-6">
              <p className="objetivo">
                Este es el resultado del trabajo y aprendizaje de estudiantes
                del Coding Bootcamp de Hack Academy realizado de setiembre a
                diciembre de 2023. Dedicamos 3 semanas para dar vida a este
                e-commerce que se crea como el escaparate virtual de una
                cafetería en Montevideo.
              </p>
            </div>
          </div>
        </section>
      </div>
      <section className="implementacion py-section ">
        <div className="container px-0 ">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="container-about">
                <h4>Implementación</h4>
                <p>
                  Desarrollamos tres repositorios fundamentales: uno para el
                  Frontend público, otro para el Frontend del administrador, y
                  el tercero que contiene el Backend junto con la Base de Datos.
                  Utilizamos JavaScript, HTML y CSS como pilares fundamentales.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="container-about">
                <h4>Backend</h4>
                <p>
                  Diseñamos un Modelo Entidad-Relación (MER) que sirve como la
                  columna vertebral de nuestro proyecto. Implementamos pruebas
                  de llamadas a las API con Insomnia.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="container-about">
                <h4>Frontend</h4>
                <p>
                  El Frontend público permite a los clientes interactuar con
                  productos y categorías, mientras que el Dashboard proporciona
                  un control total a los administradores. Utilizamos la
                  modalidad Mobile para garantizar un buen rendimiento tanto en
                  ordenadores como en dispositivos móviles.
                </p>
              </div>
            </div>
          </div>
        </div>
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

      <section className="dark">
        <div className="container-fluid">
          <div className="row">
            <div className="col d-flex gap-6 flex-wrap justify-content-center py-5">
              <img className="img-logo" src={html} alt="html logo" />
              <img className="img-logo" src={bootstrap} alt="bootstrap logo" />
              <img className="img-logo" src={css} alt="css logo" />
              <img className="img-logo" src={node} alt="node logo" />
              <img className="img-logo" src={js} alt="js logo" />
              <img className="img-logo" src={git} alt="git logo" />
              <img className="img-logo" src={react} alt="react logo" />
              <img className="img-logo" src={github} alt="github logo" />
              <img className="img-logo" src={redux} alt="redux logo" />
              <img className="img-logo" src={mongo} alt="mongo logo" />
            </div>
          </div>
        </div>
      </section>
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
