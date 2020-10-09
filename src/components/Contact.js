
import React, { useState } from "react";
import axios from "axios";


const Contact = () => {
   
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [sent, setSent] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setMessage(e.target.value);
    }
    const formSubmit = (e) => {
        e.preventDefault();
        let data = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            message: message

        }
        axios.post("https://send-mailing-api.herokuapp.com/", data)
            .then(response => {
                console.log("my data",response.data)
                setSent(response.data);
                setFirstName("");
                setLastName("");
                setEmail("");
                setMessage("");
                alert("Votre message a été envoyé avec succé !")

            }).catch(() => {
                console.log("message not sent")
            })

    }

    return (
        <div className="contener">
            <h3>FORMULAIRE DE CONTACT</h3>
            <form onSubmit={formSubmit} className="formContact">
                <div>
                    <label htmlFor="name">Nom</label>
                    <input value={firstName} className="name" type="text" name="firsname" placeholder="Votre nom" onChange={handleFirstName} />
                </div>
                <div>
                    <label htmlFor="prenom">Prénom</label>
                    <input  value={lastName} className="prenom" type="text" name="lastname" placeholder="Votre prenom" onChange={handleLastName} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input value={email} className="email" type="email" name="email" placeholder="Vote E-mail" onChange={handleEmail} />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea value={message} cols="40" rows="6" className="message" type="text" name="message" placeholder="Vote message" onChange={handleMessage} />
                </div>
                <div className={sent ? "msg msgAppear" : "msg"}>Message has been sent</div>
                <div className="btn">
                    <button type="submit">Envoyer</button>
                </div>
            </form>

        </div>
    )
}


export default Contact; 