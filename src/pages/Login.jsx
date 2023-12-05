import MyNavbar from "../components/MyNavbar";
import Footer from "../components/Footer";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/clientSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "POST",
      url: "http://localhost:3000/tokens",
      data: {
        email,

        password,
      },
    });
    dispatch(login(response.data));
    navigate("/");
  };

  return (
    <>
      <MyNavbar />
      <section>
        <div className=" col-12 login">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label hidden htmlFor="email" className="form-label"></label>
              <input
                className="form-control"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                id="email"
              />
            </div>

            <div className="mb-3">
              <label hidden htmlFor="password" className="form-label"></label>
              <input
                className="form-control"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                id="password"
              />
            </div>
            <button type="submit" className="btn btn-secondary">
              Login
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Login;
