import { useEffect, useState } from "react";
import Header from "../components/header/Header";
import axios from "axios";

const Reference = () => {
  const [references, setReferences] = useState([]);
  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_SERVER_URL}references`
        );
        setReferences(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReferences();
  }, []);

  if (references.length === 0) {
    {
      console.log("first");
    }
    return (
      <section className="loading">
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <div>
      <Header />
      <img
        src="https://cdn-icons-png.flaticon.com/128/3038/3038089.png"
        alt="library icon"
        className="ref-img"
      />
      <section className="references">
        {references.map((ref) => (
          <p key={ref._id}>{ref.text}</p>
        ))}
      </section>
    </div>
  );
};

export default Reference;
