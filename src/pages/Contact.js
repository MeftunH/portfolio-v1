import React, { useRef } from "react";
import Header from "../components/Header";
import emailjs from '@emailjs/browser'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_80njg3u','template_t9sny2v',e.target,'n8nRqMclzmzBCkKU7')
    .then(
      (result)=>{
      toast.success("Your message has been sent successfully")
    }, (error)=>{
      toast.error("Unfortunately, your message has not been sent")
    }
    );
  };
  return (
    <div>
    <Header/>
    <div className="container contact mt-5">
      <div className="row pt-5">
        <div className="col-md-6 p-5">
          <img src="./assets/contact-me.svg" alt="" />
        </div>
        <div className="col-md-6">
          <div className="contact form m-2 p-5 n-box-interest-intro">
            <h3 className="font-bold">Contact Me</h3>
            <hr />
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" className="form-control" placeholder="Name" required/>
            <input type="email" name="email" className="form-control" placeholder="Email" required/>
            <textarea type="text" name="message" className="form-control" rows={3} defaultValue={""} required/>
            <button type="submit" className="primary-button mt-3">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contact;
