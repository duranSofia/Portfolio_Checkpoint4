import React from "react";

export default function Contact() {
  return (
    <div>
      <h3>Get in touch with me:</h3>
      <input type="text" name="name" placeholder="Name"></input>
      <input type="email" name="email" placeholder="Email"></input>
      <textarea name="message" placeholder="Send me a message"></textarea>
    </div>
  );
}
