import React from "react";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";

function AboutProject() {
  return (
    <>
      <MyNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Sobre el proyecto</h1>
            <p>
              Este es el resultado del trabajo y aprendizaje de un
              grupo de estudiantes del Coding Bootcamp de Hack Academy realizado
              de setiembre a diciembre de 2023. 
              Este proyecto es una representación tangible de las habilidades y conocimientos que
              hemos adquirido. 
              Dedicamos 3 semanas para dar vida a este
              e-commerce que se erige como el escaparate virtual de una
              cafetería en Montevideo. </p>
              
              <h3>Tecnologías
              Implementadas:</h3> 
              <p>Desarrollamos tres repositorios fundamentales: uno
              para el Frontend público, otro para el Frontend del administrador,
              y el tercero que contiene el Backend junto con la Base de Datos.
              Utilizamos JavaScript, HTML y CSS como pilares fundamentales.</p>
              <h3>Detalles de Nuestros Repositorios</h3> 
              <p>Backend: Diseñamos un Modelo
              Entidad-Relación (MER) que sirve como la columna vertebral de
              nuestro proyecto. El Frontend público permite a los clientes
              interactuar con productos y categorías mientras que el Dashboard
              proporciona un control total a los administradores. Implementamos
              pruebas de llamadas a las API con Insomnia.</p> 
              <p>Frontend Público:
              Utilizamos la modalidad Mobile para garantizar un rendimiento
              excepcional tanto en ordenadores como en dispositivos móviles.
              Inspirados en diversos e-commerce, construimos una interfaz que
              busca ofrecer una experiencia agradable y adaptada al perfil de la
              empresa.</p>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutProject;
