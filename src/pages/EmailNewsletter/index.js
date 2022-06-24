import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

import "./styles.scss";

export default function EmailNewsletter() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputRef = useRef();

  const submit = (e) => {
    e.preventDefault();

    var templateParams = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      message: message,
    };

    emailjs
      .send(
        "service_y7fq1o3",
        "template_89dj9rt",
        templateParams,
        "Y8tiOkzf-c7ZDYAZy"
      )
      .then(
        function (response) {
          setFirstName("");
          setLastName("");
          setEmail("");
          setMessage("");
          successToast("message sent");
        },
        function (error) {
          errorToast("message wasn't sent");
        }
      );
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <div className="form-container">
        <form className="contact" onSubmit={submit}>
          <h2>Join our mailing list!</h2>
          <label htmlFor="name">
            First Name
            <input
              ref={inputRef}
              type="text"
              id="name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label htmlFor="name">
            Last Name
            <input
              type="text"
              id="name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Message
            <textarea
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button type="submit" className="sign-in-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
