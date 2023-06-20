import { useState } from "react";
import "./chatbot.css";
import axios from "axios";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [answerList, setAnswerList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const getAnswer = async () => {
      const res = await axios.post("http://localhost:5000/api/compare", {
        question,
      });
      setAnswerList((prev) => [
        ...prev,
        { question: question, answer: res.data },
      ]);
    };
    getAnswer();
  };

  return (
    <section className="chatbot">
      <section className="question-answer-box">
        {answerList.map((a, index) => (
          <section className="quest-sec" key={index}>
            <p className="question">{a.question}</p>
            <p className="answer">{a.answer}</p>
          </section>
        ))}
      </section>

      <form action="" className="chat-form" onSubmit={handleSubmit}>
        <input
          lang="ar"
          type="text"
          placeholder="...اسالني ما تريد"
          onChange={(e) => setQuestion(e.target.value)}
          className="chat-input"
        />
        <button className="ask-btn" disabled={!question}>
          اسألني
        </button>
      </form>
    </section>
  );
};

export default Chatbot;
