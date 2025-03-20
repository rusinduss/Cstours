import "react";
import NavBar from "../Components/NavBar";
import { Link } from "react-router-dom";
import "../Css/ContactUs.css";
import Callgirl from "../assets/Callgirl.png";
import Form from "../Forms/form";

function ContactUs() {
  return (
    <div className="contact-container">
      <div>
        <NavBar />
      </div>
      <div className="chat-Box">
        <Link className="chat-Box-Link" to="https://api.whatsapp.com/send/?phone=94712943454&text&type=phone_number&app_absent=0">
          Chat with Us
        </Link>
      </div>
      <div className="contact-Box">
        <h1>Contact Us</h1>
        Contact CS Tours to confirm your visit and obtain information. Since you
        are our priority, you can always discuss with us and customize travel
        packages according to your wishes.
      </div>
      <div className="full-box">
        <div className="Contactinfo-left">
          <div className="contactinfo-box">
            <h2>CONTACT INFO</h2>
            <br />
            <p>
              Address: Kandy, Sri Lanka.
              <br />
              Email: cstours.kandy@gmail.com
              <br />
              Telephone: 0712943454
              <br />
            </p>
          </div>
        </div>
        <div className="Contactinfo-right">
          <div className="image">
            <img src={Callgirl}></img>
          </div>
        </div>
      </div>
      <Form/>
    </div>
  );
}

export default ContactUs;
