import "./AboutUs.css";
import React from "react";

function AboutUs() {
  return (
    <>
      <section className="dark py-section">
        <img src="" className="position-absolute"></img>
        <img src="" className="position-absolute"></img>

        <div className="container">
          <div className="row">
            <div className="col-6 d-flex justify-content-end">
              <img src="img/aboutUs_merged.png"></img>
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
              <div className="speech-bubble-body">
                <div className="col-12 speech-bubble">
                  <h3>Veni a conocernos</h3>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur tempora ad atque saepe voluptatem iure adipisci
                    temporibus veniam unde assumenda.
                  </p>
                </div>
              </div>
              <img style={{width: 224, height: 96, marginTop: 50}} src="img/gatito.png"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="orange py-4">
        <h5 className="text-center m-0">Encina 1663, Palermo, Montevideo</h5>
      </section>
    </>
  );
}

export default AboutUs;
