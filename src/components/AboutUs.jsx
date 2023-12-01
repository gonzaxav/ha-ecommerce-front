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
                  <h3>Vení a conocernos</h3>
                  <p className="m-0">
                    de Martes a Viernes 9 a 19 hs y Sábados 10 a 19 hs
                  </p>
                  <p className="mt-1 m-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="30"
                    width="30"
                    viewBox="0 0 512 512"
                  >
                    <path d="M226.5 92.9c14.3 42.9-.3 86.2-32.6 96.8s-70.1-15.6-84.4-58.5s.3-86.2 32.6-96.8s70.1 15.6 84.4 58.5zM100.4 198.6c18.9 32.4 14.3 70.1-10.2 84.1s-59.7-.9-78.5-33.3S-2.7 179.3 21.8 165.3s59.7 .9 78.5 33.3zM69.2 401.2C121.6 259.9 214.7 224 256 224s134.4 35.9 186.8 177.2c3.6 9.7 5.2 20.1 5.2 30.5v1.6c0 25.8-20.9 46.7-46.7 46.7c-11.5 0-22.9-1.4-34-4.2l-88-22c-15.3-3.8-31.3-3.8-46.6 0l-88 22c-11.1 2.8-22.5 4.2-34 4.2C84.9 480 64 459.1 64 433.3v-1.6c0-10.4 1.6-20.8 5.2-30.5zM421.8 282.7c-24.5-14-29.1-51.7-10.2-84.1s54-47.3 78.5-33.3s29.1 51.7 10.2 84.1s-54 47.3-78.5 33.3zM310.1 189.7c-32.3-10.6-46.9-53.9-32.6-96.8s52.1-69.1 84.4-58.5s46.9 53.9 32.6 96.8s-52.1 69.1-84.4 58.5z" />
                  </svg>
                  </p>
                </div>
              </div>
              <img
                style={{ width: 600 * 0.6, height: 233 * 0.6 }}
                src="img/gatito5.png"
              ></img>
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
