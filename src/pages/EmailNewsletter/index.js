import { useState, useRef, useEffect } from "react";
// import emailjs from "@emailjs/browser";

import "./styles.scss";

export default function EmailNewsletter() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputRef = useRef();

  return (
    <>
      <iframe
        src="https://us10.list-manage.com/contact-form?u=6f5e1ed7f167b48d75116ef71&form_id=151897928f1b4371c94a2d4fd17af562"
        className="form-container"
      ></iframe>
    </>
  );
}
