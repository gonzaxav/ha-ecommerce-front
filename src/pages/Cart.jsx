import React from "react";
import MyNavbar from "../components/MyNavbar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cart() {
  return (
    <>
      <MyNavbar />
      <section>
        <div className="container">
          <div className="row tabla-carrito">
            <div className="col-9">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <h2 className="h2-carrito">Artículos (3)</h2>
                    </th>
                    <th scope="col"></th>
                    <th scope="col">
                      <h2 className="h2-carrito">Precio</h2>
                    </th>
                    <th scope="col">
                      <h2 className="h2-carrito">Cantidad</h2>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        className="img-carrito"
                        src="/img/cafetera-2.jpg"
                        alt="cafetera italiana"
                      />
                    </td>
                    <td>Cafetera Prensa Francesa</td>
                    <td>U$U 2500</td>
                    <td className="cantidad">
                      <div className="select-container">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="3">4</option>
                          <option value="3">5</option>
                        </select>
                      </div>
                      <div className="button-container">
                        <button type="button" className="btn btn-secondary">
                          Borrar
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="img-carrito"
                        src="/img/filtros.jpg"
                        alt=""
                      />
                    </td>
                    <td>Filtros Chemex Pack x 100</td>
                    <td>U$U 400</td>
                    <td className="cantidad">
                      <div className="select-container">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="3">4</option>
                          <option value="3">5</option>
                        </select>
                      </div>
                      <div>
                        <button type="button" className="btn btn-secondary">
                          Borrar
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        className="img-carrito"
                        src="/img/balanza-2.jpg"
                        alt=""
                      />
                    </td>
                    <td>Balanza de precision USB touch</td>
                    <td>U$U 1900</td>
                    <td className="cantidad">
                      <div className="select-container">
                        <select
                          className="form-select"
                          aria-label="Default select example"
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="3">4</option>
                          <option value="3">5</option>
                        </select>
                      </div>
                      <div>
                        <button type="button" className="btn btn-secondary">
                          Borrar
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-3">
              <Card>
                <Card.Body>
                  <Card.Title>
                    <h2 className="h2-carrito">Resumen</h2>
                  </Card.Title>
                  <Card.Text>
                    <p>Subtotal: 3 productos</p>
                    <h3 className="h3-carrito">U$U 4800</h3>
                    <hr />
                  </Card.Text>
                  <Button variant="secondary">Continuar</Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;
