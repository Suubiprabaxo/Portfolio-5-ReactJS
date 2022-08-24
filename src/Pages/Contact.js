import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
// import "../common/ToastJs";

const Contact = () => {
  const [done, setDone] = useState(false);
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qt6ynin",
        "template_fti9rjh",
        formRef.current,
        "user_GN17fKoDZSyAlOwwLj3LN"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 offset-sm-3">
            <h2 data-aos="fade-up">Contato</h2>
            <br />
            <form onSubmit={sendEmail} ref={formRef}>
              {/* <form ref={formRef}> */}
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Digite seu nome"
                className="form-control"
                name="user_name" required
              />
              <div className="row">
                <div className="col-sm-6">
                  <input
                    data-aos="fade-up"
                    type="email"
                    placeholder="Digite seu Email"
                    className="form-control"
                    name="user_email" required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    data-aos="fade-up"
                    type="text"
                    placeholder="Digite seu número"
                    className="form-control"
                    name="user_contact" pattern="[0-9]{10}" title="Please enter valid number." required
                  />
                </div>
              </div>
              <input
                data-aos="fade-up"
                type="text"
                placeholder="Assunto da mensagem"
                className="form-control"
                name="user_subject" required
              />
              <textarea
                data-aos="fade-up"
                name="user_message"
                rows="4"
                className="form-control"
                placeholder="Digite sua mensagem" required
              ></textarea>
              <br />
              <button
                data-aos="fade-up"
                type="submit"
                className="btn btn-primary"
              >
                Enviar
              </button>
              <br />
              <br />
              {done ? <p>Thank you for contacting :))</p> : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
