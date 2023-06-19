import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register";
import Reference from "./pages/Reference";

const App = () => {
  return (
    <section className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reference" element={<Reference />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
};

export default App;
