import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import { getError, getUser, getUserStart } from "../../redux/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [ID, setID] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginUser = async () => {
      try {
        dispatch(getUserStart());
        const res = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}auth/login`,
          {
            ID: ID,
            password,
          }
        );
        dispatch(getUser(res.data));
        navigate("/");
      } catch (error) {
        dispatch(getError(error));
      }
    };
    loginUser();
  };

  return (
    <div className="sign-container">
      <form action="" onSubmit={handleSubmit} className="sign-form">
        <section className="sign-section">
          <input
            type="number"
            placeholder="ID..."
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
        <button type="submit" className="btn" disabled={!ID || !password}>
          Login
        </button>
        <span>
          Need to create an account <Link to={"/register"}>Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
