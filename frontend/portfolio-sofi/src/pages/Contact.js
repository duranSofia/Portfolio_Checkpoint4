import React from "react";
import Button from "react-bootstrap/Button";

export default function Contact() {
  return (
    <div className="contact-form">
      <h3>Contact me:</h3>
      <input type="text" name="name" placeholder="Name"></input>
      <input type="email" name="email" placeholder="Email"></input>
      <textarea name="message" placeholder="Send me a message"></textarea>
      <Button className="mt-2" variant="dark">
        Submit
      </Button>
    </div>
  );
}
