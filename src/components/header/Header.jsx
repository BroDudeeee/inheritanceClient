import "./header.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/userSlice";

const Header = () => {
  const currentUser = useSelector((store) => store.userReducer.user);
  const dispatch = useDispatch();
  console.log(currentUser);
  return (
    <header>
      <nav>
        <Link className="link" to={"/"}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/9044/9044965.png"
            alt="logo"
            className="logo"
          />
        </Link>
        <ul className="header-links">
          <li>
            <Link to={"/"} className="link">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to={"/reference"}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/3038/3038089.png"
                alt="library"
                className="icon-img"
              />
            </Link>
          </li>
          <li>
            <Link className="link" to={"https://simple-quiz-tan.vercel.app/"}>
              Quiz
            </Link>
          </li>
        </ul>
        {!currentUser ? (
          <section className="login-register">
            <Link className="link sign" to={"/register"}>
              Register
            </Link>
            <Link className="link sign" to={"/login"}>
              Login
            </Link>
          </section>
        ) : (
          <section className="user-logout">
            <h2>{currentUser.name}</h2>
            <button
              className="logout-btn"
              onClick={() => dispatch(removeUser())}
            >
              Logout
            </button>
          </section>
        )}
      </nav>
    </header>
  );
};

export default Header;
