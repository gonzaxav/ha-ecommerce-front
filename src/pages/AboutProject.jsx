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
import dashboard from "../img/dashboard.png";
import paletacolores from "../img/paleta-colores.jpg";
import logo from "../img/logo.jpg";
import fuentes from "../img/fuentes.jpg";
import illustraciones from "../img/illustraciones.jpg";

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
        <img className="mer mx-auto mt-3 mb-5" src={mer} />
      </section>
      <section className="light">
        <h3 className="titulo-categoria py-3 mb-5">Admin</h3>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-12 mb-5 d-flex flex-column">
              <p>
              Ofrecemos un panel de control administrativo que permite llevar a cabo diversas operaciones. Desde esta interfaz, se pueden realizar ajustes en la información de productos, categorías, órdenes, clientes y administradores ya sea habilitando y deshabilitando, actualizando, eliminando o creando nuevos elementos.
              </p>
              </div>
            </div>
            <div className="col my-4">
              <img src={dashboard}></img>
            </div>
          </div>
        </div>
      </section>
      <section className="light">
        <h3 className="titulo-categoria py-3 mb-5">Diseño</h3>
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5 d-flex flex-column">
              <p>
                Hemos creado un concepto de tienda de café y artículos
                relacionados, que permite a los usuarios explorar sin
                inconvenientes diversas secciones, descubrir una amplia gama de
                opciones y categorías de productos, y añadir fácilmente sus
                elecciones al carrito para su compra.
              </p>
              <p>
                Trabajamos con una cafetería real cuya identidad ya estaba
                definida, por lo que respetamos la tipografía, paleta de
                colores, ilustraciones y logo. Todo esto fue realizado por la
                diseñadora gráfica Florencia Labanca.
              </p>
              <div className="row">
                <div className="col-12 col-lg-6">
                  <img
                    className="mx-auto paleta-colores mt-4"
                    src={paletacolores}
                  ></img>
                </div>
                <div className="col-12 col-lg-6">
                  <img
                    className="mx-auto paleta-colores mt-4"
                    src={fuentes}
                  ></img>
                </div>
                <div className="col-12 col-lg-6">
                  <img className="mx-auto paleta-colores mt-4" src={logo}></img>
                </div>
                <div className="col-12 col-lg-6">
                  <img
                    className="mx-auto paleta-colores mt-4"
                    src={illustraciones}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className="titulo-categoria py-3 mb-5">Nuestro equipo</h1>
        <div className="container">
          <div className="row">
            <div className="cont-persona col-6 col-md-3">
              <img
                className="pfp"
                src="https://cdn.discordapp.com/attachments/1176988128926498929/1202308766272606228/perfil.png?ex=65ccfc4b&is=65ba874b&hm=43e9f4a8646bacf0be268c4bf589bf60ff74ee370528a1de58e6961b1d2dadd6&"
              ></img>
              <h4>Matias Nin</h4>
              <h6>Full Stack Developer</h6>
              <p>
                <a
                  target="_blank"
                  className="text-dark"
                  href="https://www.linkedin.com/in/matias-nin-713130257/"
                >
                  <i className="bi bi-linkedin fs-2"></i>{" "}
                </a>
                <a
                  target="_blank"
                  className="text-dark"
                  href="https://github.com/MATIASNIN"
                >
                  <i className="bi bi-github fs-2"></i>
                </a>
              </p>
            </div>
            <div className="cont-persona col-6 col-md-3">
              <img
                className="pfp"
                src="https://cdn.discordapp.com/attachments/1176988128926498929/1202308766272606228/perfil.png?ex=65ccfc4b&is=65ba874b&hm=43e9f4a8646bacf0be268c4bf589bf60ff74ee370528a1de58e6961b1d2dadd6&"
              ></img>
              <h4>Gonzalo Xavier</h4>
              <h6>Full Stack Developer</h6>
              <p>
                <a
                  target="_blank"
                  className="text-dark"
                  href="https://www.linkedin.com/in/gonzalo-xavier-gutierrez/"
                >
                  <i className="bi bi-linkedin fs-2"></i>{" "}
                </a>
                <a
                  target="_blank"
                  className="text-dark"
                  href="https://github.com/gonzaxav"
                >
                  <i className="bi bi-github fs-2"></i>
                </a>
              </p>
            </div>
            <div className="cont-persona col-6 col-md-3">
              <img
                className="pfp"
                src="https://cdn.discordapp.com/attachments/1176988128926498929/1202308766272606228/perfil.png?ex=65ccfc4b&is=65ba874b&hm=43e9f4a8646bacf0be268c4bf589bf60ff74ee370528a1de58e6961b1d2dadd6&"
              ></img>
              <h4>Alejo Negreira</h4>
              <h6>Full Stack Developer</h6>
              <p>
                <a
                  target="_blank"
                  className="text-dark"
                  href="https://www.linkedin.com/in/alejo-negreira-1ba9b3297/"
                >
                  <i className="bi bi-linkedin fs-2"></i>{" "}
                </a>
                <a
                  target="_blank"
                  className="text-dark"
                  href="https://github.com/AlitoZzz"
                >
                  <i className="bi bi-github fs-2"></i>
                </a>
              </p>
            </div>
            <div className="cont-persona col-6 col-md-3">
              <img
                className="pfp"
                src="https://cdn.discordapp.com/attachments/1176988128926498929/1202308766272606228/perfil.png?ex=65ccfc4b&is=65ba874b&hm=43e9f4a8646bacf0be268c4bf589bf60ff74ee370528a1de58e6961b1d2dadd6&"
              ></img>

              <h4>Melanie Rebour</h4>
              <h6>Full Stack Developer</h6>
              <p>
                <a
                  target="_blank"
                  className="text-dark"
                  href="https://www.linkedin.com/in/melanie-rebour/"
                >
                  <i className="bi bi-linkedin fs-2"></i>{" "}
                </a>
                <a
                  target="_blank"
                  className="text-dark"
                  href="https://github.com/melirebour"
                >
                  <i className="bi bi-github fs-2"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default AboutProject;
