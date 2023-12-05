import axios from "axios";
import "./SignUp.css";
import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function SignUp() {
  const [newName, setNewName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [newAddress, setNewAddress] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const createClient = async () => {
      await axios({
        method: "POST",
        url: "http://localhost:3000/client",
        data: {
          firstname: newName,
          lastname: newLastName,
          email: newEmail,
          password: newPassword,
          address: newAddress,
          phone: newPhone,
        },
      });
      navigate("/");
    };
    createClient();
  };

  return (
    <>
      <MyNavbar />
      <section className="section-signUp white">
        <div className="container d-flex align-items-center justify-content-center vh-100">
          <div className="row row-form">
            <div className="col-12 ">
              <h1 className="signup-title">Crear una cuenta</h1>
              <div className="div-form ">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label
                      hidden
                      htmlFor="firstname"
                      className="form-label"
                    ></label>
                    <input
                      className="form-control form-field"
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
                      className="form-control form-field"
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
                      className="form-control form-field"
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
                    <label hidden htmlFor="address"></label>
                    <input
                      className="form-control form-field"
                      type="address"
                      placeholder="Dirección"
                      id="address"
                      value={newAddress}
                      onChange={(e) => setNewAddress(e.target.value)}
                      required
                      name="address"
                    />
                  </div>

                  <div className="mb-3">
                    <label hidden htmlFor="phone"></label>
                    <input
                      className="form-control form-field"
                      type="phone"
                      placeholder="Teléfono"
                      id="phone"
                      value={newPhone}
                      onChange={(e) => setNewPhone(e.target.value)}
                      required
                      name="phone"
                    />
                  </div>

                  <div className="mb-3">
                    <label hidden htmlFor="password"></label>
                    <input
                      className="form-control form-field"
                      type="password"
                      placeholder="Contraseña"
                      id="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      required
                      name="password"
                    />
                  </div>
                  <div className=" div-btn col-6  mb-3  d-flex">
                    <button
                      className="btn-registro btn btn-ligth "
                      type="submit"
                    >
                      Regístrate
                    </button>

                    <Link className="btn-login" to={"/login"}>
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default SignUp;
