import { useState } from "react";
import "./register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState();
  const [ID, setID] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const registerUser = async () => {
      await axios.post(`${import.meta.env.VITE_SERVER_URL}auth/register`, {
        name,
        ID: ID,
        password: password,
      });

      navigate("/login");
    };
    registerUser();
  };

  return (
    <div className="sign-container">
      <form action="" onSubmit={handleSubmit} className="sign-form">
        <section className="sign-section">
          <input
            type="text"
            placeholder="Username.."
            onChange={(e) => setName(e.target.value)}
          />
        </section>
        <section className="sign-section">
          <input
            type="number"
            placeholder="ID.."
            onChange={(e) => setID(e.target.value)}
            className="sign-input-number"
          />
        </section>
        <section className="sign-section">
          <input
            type="password"
            placeholder="Password.."
            onChange={(e) => setPassword(e.target.value)}
          />
        </section>
        <button
          type="submit"
          className="btn"
          disabled={!name || !ID || !password}
        >
          Register
        </button>
        <span>
          Already have an account <Link to={"/login"}>Login</Link>
        </span>
      </form>
    </div>
  );
};

export default Register;
