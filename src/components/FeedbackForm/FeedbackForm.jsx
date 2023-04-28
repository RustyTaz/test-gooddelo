import React, { useState } from "react";
import "./FeedbackForm.css"; 
import MyButton from "../UI/MyButton/MyButton";

function FeedbackForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    // Send form data to server
    console.log(name, phone, email);
    // Clear form fields
    setName("");
    setPhone("");
    setEmail("");
  }

  return (
    <div className="feedback-container">
      <h1 className="feedback-heading">Получите консультацию</h1>
      <form onSubmit={handleSubmit} className="feedback-form">
        <label>
          Имя:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Телефон:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <MyButton> Отправить</MyButton>
      </form>
    </div>
  );
}

export default FeedbackForm;
