import React from "react";

function AboutUs() {
  return (
    <>
      <section className="light py-5">
        <img src="" className="position-absolute"></img>
        <img src="" className="position-absolute"></img>

        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-end">
              <img src="img/aboutUs_merged.png"></img>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <div className="col-8">
              <h2>Veni a conocernos</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequuntur tempora ad atque saepe voluptatem iure adipisci
                temporibus veniam unde assumenda.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="dark py-4">
        <h5 className="text-center m-0">Encina 1663, Palermo, Montevideo</h5>
      </section>
    </>
  );
}

export default AboutUs;
