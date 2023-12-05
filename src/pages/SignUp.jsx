import axios from "axios";
import "./SignUp.css";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const createClient = async (e) => {
    e.preventDefault();
    const newFormData = new FormData(e.target);
    await axios({
      method: "POST",
      url: "http://localhost:3000/clients",
      data: newFormData,
      headers: {
        "content-type": " multipart/form-data",
      },
    });
    navigate("/login");
  };

  return (
    <>
      <MyNavbar />
      <section className="section-signUp cream">
        <div className="container d-flex align-items-center justify-content-center vh-100">
          <div className="row row-form">
            <div className="col-12 ">
              <h1 className="signup-title">Crear una cuenta</h1>

              <form onSubmit={createClient}>
                <div className="mb-3">
                  <label
                    hidden
                    htmlFor="firstname"
                    className="form-label"
                  ></label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Nombre"
                    id="firstname"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    required
                    name="firstname"
                  />
                </div>
                <div className="mb-3">
                  <label hidden htmlFor="lastname"></label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Apellido"
                    id="lastname"
                    value={newLastName}
                    onChange={(e) => setNewLastName(e.target.value)}
                    required
                    name="lastname"
                  />
                </div>
                <div className="mb-3">
                  <label hidden htmlFor="email"></label>
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                    id="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                    name="email"
                  />
                </div>

                <div className="mb-3">
                  <label hidden htmlFor="password"></label>
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Contraseña"
                    id="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    name="password"
                  />
                </div>
                <div className=" d-grid col-6 mx-auto mb-3  d-flex">
                  <button
                    className="btn-registro btn btn-secondary "
                    type="submit"
                  >
                    Regístrate
                  </button>
                  <div>
                    <button className="btn-login btn btn-secondary ">
                      ingresar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SignUp;
