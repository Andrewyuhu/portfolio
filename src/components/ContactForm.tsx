import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    setSuccessMessage("");
    setErrorMessage("");
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    try {
      emailjs.init({ publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY });
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        { name, email, message }
      );
      setSuccessMessage("Message sent!");
    } catch {
      setErrorMessage("Something went wrong. Please try again!");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-input">
        <label htmlFor="name">Name</label>
        <input
          name="name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-input">
        <label htmlFor="email">Email</label>
        <input
          name="name"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
      </div>
      <div className="form-text-area">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          minLength={1}
          maxLength={500}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your message (max 500 characters)"
        ></textarea>
      </div>
      {successMessage && (
        <span className="success-message">{successMessage}</span>
      )}
      {errorMessage && <span className="error-message">{errorMessage}</span>}
      <button className="form-btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
