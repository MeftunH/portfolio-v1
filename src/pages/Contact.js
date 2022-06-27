import React, { useRef } from "react";
import Header from "../components/Header";
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_80njg3u','template_t9sny2v',form.current,'n8nRqMclzmzBCkKU7')
    .then(
      (result)=>{
      console.log(result.text);
      console.log("message sent");
    }, (error)=>{
      console.log(error.text);
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
            <input type="text" name="name" className="form-control" placeholder="Name"/>
            <input type="email" name="email" className="form-control" placeholder="Email"/>
            <textarea type="text" name="message" className="form-control" rows={3} defaultValue={""}/>
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
