import React, { useState } from "react";
import Modal from "react-modal";
import hide_modal from "../images/hide_modal.png";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/email.png";
import phone from "../images/phone.png";
import AMINE_STAMBOULI_CV from "../images/AMINE_STAMBOULI_CV.PDF";
import pdf from "../images/pdf.png";

const Footer = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="footer">
      <Modal
        isOpen={modalIsOpen}
        ariaHideApp={false}
        style={{
          content: {
            backgroundColor: "black",
          },
        }}
      >
        <div className="modalFooter">
          <img alt="hide_modal" src={hide_modal} style={{ width: "5%" }} />
          <button className="hideModal" onClick={() => setModalIsOpen(false)}>Hide the modal</button>

          <h1 style={{ marginTop: "50px", color: "whitesmoke", marginLeft: "30px" }}>
            STAMBOULI AMINE
          </h1>
          <img src={linkedin} style={{ width: "5%" }} alt="myLinkedin" />
          <a
            href="https://www.linkedin.com/in/stambouli-d%C3%A9veloppeur/"
            target="_blank"
            rel="noopener noreferrer"
          >n<button>My Linkedin</button>
          </a>
          <br />
          <a
            href="https://github.com/STAM0283"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} style={{ width: "5%" }} alt="My GitHub" />
            <button>My GitHub</button>
          </a>
          <br />

          <img src={email} style={{ width: "5%" }} alt="My E-mail" />
          <button style={{ height: "80px" }}>
            aminestambouli00780
            <br />
            @gmail.com
          </button>
          <br />
          <img src={phone} style={{ width: "5%" }} alt="My Phone" />
          <button>06 99 06 93 90</button>
          <br />
          <img src={pdf} style={{ width: "5%" }} alt="myProfile" />
          <a href={AMINE_STAMBOULI_CV} target="_blank" rel="noopener noreferrer">
            <button className="pdf">

              Télécharger le CV
            </button>
          </a>

        </div>
      </Modal>
      <button
        className="btn btn-outline-danger btn-lg"
        onClick={() => setModalIsOpen(true)}
        style={{
          width: "210px",
          height: "50px",
          fontSize: "x-large",
          fontWeight: "bolder",
          marginLeft: "10px",
          marginBottom: "30px",
          marginTop: "10px",
        }}
      >
        CONTACTS
      </button>
    </div>
  );
};

export default Footer;
