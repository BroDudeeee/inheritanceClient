import "./modal.css";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({ results, setIsModalOpen, mirath }) => {
  if (!results) {
    return <h1 className="no-result">No Results here</h1>;
  }
  return (
    <section className="modal">
      <XMarkIcon className="icon" onClick={() => setIsModalOpen(false)} />
      <section className="results">
        {results.map((result) => (
          <section key={result.name}>
            <section className="modal-single">
              <h3>{result.name}</h3>
              <p>{result.count}</p>
              <p>{result.share}</p>

              <p>{result.type}</p>
            </section>
            <hr />
          </section>
        ))}
      </section>
    </section>
  );
};

export default Modal;
