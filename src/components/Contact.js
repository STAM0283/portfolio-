
import React, { useState } from "react";
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import axios from "axios";

const Contact = () => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const inputChange = (e) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://alysonb-contact.herokuapp.com/send-email", { ...state })
      .then((response) => {
        setResult(response.data);
        setState({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
        alert("Votre message a été envoyé !");
      })
      .catch((err) => {
        setResult({
          success: false,
          message: "There is a probleme on axios request",
        });
        console.log(result);
        console.log(err);
      });
  };

  return (
    <section id="contact">
      <Container className="pt-5 pb-5">
        <Row className="mb-2">
          <h1>
            Prenons contact
          </h1>
          <h3 className="myColor">Besoin de plus d'infos ?</h3>
        </Row>

        <Form onSubmit={handleSubmit}>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm="2">
              firstName
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="name"
                type="text"
                placeholder="Votre prénom"
                value={state.firstName}
                onChange={inputChange}
                required
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} controlId="name">
            <Form.Label column sm="2">
              lastName
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="name"
                type="text"
                placeholder="Votre prénom"
                value={state.lastName}
                onChange={inputChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="email">
            <Form.Label column sm="2">
              Email
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="email"
                type="email"
                placeholder="Votre email"
                value={state.email}
                onChange={inputChange}
                required
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} controlId="message">
            <Form.Label column sm="2">
              Message
            </Form.Label>
            <Col sm="10">
              <Form.Control
                name="message"
                as="textarea"
                rows="3"
                placeholder="Votre message"
                value={state.message}
                onChange={inputChange}
                required
              />
            </Col>
          </Form.Group>
          <Button className="bouton" variant="primary" type="submit">
            Envoyer
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default Contact;

// import React, { useState } from "react";
// import axios from "axios";


// const Contact = () => {
   
//     const [firstName, setFirstName] = useState("");
//     const [lastName, setLastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [message, setMessage] = useState("");
//     const [sent, setSent] = useState("");

//     const handleFirstName = (e) => {
//         setFirstName(e.target.value);
//     }

//     const handleLastName = (e) => {
//         setLastName(e.target.value);
//     }
//     const handleEmail = (e) => {
//         setEmail(e.target.value);
//     }
//     const handleMessage = (e) => {
//         setMessage(e.target.value);
//     }
//     const formSubmit = (e) => {
//         e.preventDefault();
//         let data = {
//             firstName: firstName,
//             lastName: lastName,
//             email: email,
//             message: message

//         }
//         axios.post("https://send-mailing-api.herokuapp.com/contact", {...data})
//             .then(response => {
//                 console.log("my data",response)
//                 setSent(response.data);
//                 setFirstName("");
//                 setLastName("");
//                 setEmail("");
//                 setMessage("");
//                 alert("Votre message a été envoyé avec succé !")

//             }).catch(() => {
//                 console.log("message not sent")
//             })

//     }

//     return (
//         <div className="contener">
//             <h3>FORMULAIRE DE CONTACT</h3>
//             <form onSubmit={formSubmit} className="formContact">
//                 <div>
//                     <label htmlFor="name">Nom</label>
//                     <input value={firstName} className="name" type="text" name="firsname" placeholder="Votre nom" onChange={handleFirstName} />
//                 </div>
//                 <div>
//                     <label htmlFor="prenom">Prénom</label>
//                     <input  value={lastName} className="prenom" type="text" name="lastname" placeholder="Votre prenom" onChange={handleLastName} />
//                 </div>
//                 <div>
//                     <label htmlFor="email">E-mail</label>
//                     <input value={email} className="email" type="email" name="email" placeholder="Vote E-mail" onChange={handleEmail} />
//                 </div>
//                 <div>
//                     <label htmlFor="message">Message</label>
//                     <textarea value={message} cols="40" rows="6" className="message" type="text" name="message" placeholder="Vote message" onChange={handleMessage} />
//                 </div>
//                 <div className={sent ? "msg msgAppear" : "msg"}>Message has been sent</div>
//                 <div className="btn">
//                     <button type="submit">Envoyer</button>
//                 </div>
//             </form>

//         </div>
//     )
// }


// export default Contact; 