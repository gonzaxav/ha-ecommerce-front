import React from "react";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer"
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cart() {
  return (
    <>
      <MyNavbar />
      <section className="vh-100">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Carrito</h1>
            </div>
          </div>
          <div className="row tabla-carrito">
            <div className="col-lg-9">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">
                      <h2 className="h2-carrito">Artículos (3)</h2>
                    </th>

                    <th scope="col">
                      <h2 className="h2-carrito">Precio</h2>
                    </th>
                    <th scope="col">
                      <h2 className="h2-carrito ">Cantidad</h2>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <span className="span-carrito">
                        <img
                          className="img-carrito d-none d-lg-table-cell"
                          src="/img/cafetera-2.jpg"
                          alt="cafetera francesa"
                        />
                      </span>
                      <span id="descripcion-1" className="span-carrito">Cafetera Prensa Francesa</span>
                    </td>

                    <td>
                      <span className="span-carrito">U$U 2500</span>
                    </td>
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
                      <div className="button-container ">
                        <button
                          id="btn-borrar-2"
                          type="button"
                          className="btn btn-secondary"
                        >
                          Borrar
                        </button>
                      </div>
                      
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="span-carrito">
                        <img
                          className="img-carrito d-none d-lg-table-cell"
                          src="/img/filtros.jpg"
                          alt=""
                        />
                      </span>
                      <span id="descripcion-2" className="span-carrito">Filtros Chemex Pack x 100</span>
                    </td>

                    <td>
                      <span className="span-carrito">U$U 400</span>
                    </td>
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
                        <button
                          id="btn-borrar-1"
                          type="button"
                          className="btn btn-secondary"
                        >
                          Borrar
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span className="span-carrito">
                        <img
                          className="img-carrito d-none d-lg-table-cell"
                          src="/img/balanza-2.jpg"
                          alt=""
                        />
                      </span>
                      <span id="descripcion-3" className="span-carrito">Balanza de precision USB touch</span>
                    </td>

                    <td>
                      <span className="span-carrito" >U$U 1900</span>
                    </td>
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
                        <button
                          id="btn-borrar"
                          type="button"
                          className="btn btn-secondary"
                        >
                          Borrar
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-lg-3">
              <Card className="card-resumen">
                <Card.Body>
                  <Card.Title>
                    <h2 className="h2-carrito">Resumen</h2>
                  </Card.Title>
                  <Card.Text>
                    <p className="p-carrito">Subtotal: 3 productos</p>
                    <h3 className="h3-carrito">U$U 4800</h3>
                    <hr />
                  </Card.Text>
                  <Button id="btn-continuar" variant="secondary">
                    Continuar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      
    </>
  );
}

export default Cart;
