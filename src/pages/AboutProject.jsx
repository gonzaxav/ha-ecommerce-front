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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem quia laborum vel minus ipsam pariatur? Tempora
              quaerat iste ut porro ab quis sunt libero labore facilis quas sed
              exercitationem, veniam neque perferendis voluptatum! Dolor,
              incidunt! Reprehenderit praesentium enim esse dolor, consequatur
              recusandae est repellendus provident, soluta, laboriosam hic sunt
              dicta.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutProject;
