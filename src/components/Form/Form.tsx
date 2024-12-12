import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, ContainerSucces } from "./styles";

export function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate a successful submission
    setIsSubmitted(true);
    toast.success("Email successfully sent!", {
      position: toast.POSITION.BOTTOM_LEFT,
      pauseOnFocusLoss: false,
      closeOnClick: true,
      hideProgressBar: false,
      toastId: "success",
    });

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  if (isSubmitted) {
    return (
      <ContainerSucces>
        <h3>Thanks for getting in touch!</h3>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form
        action="https://formsubmit.co/dev.allen900@gmail.com"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="_captcha"
          value="false"
        />
        <input
          type="hidden"
          name="_next"
          value="https://yourwebsite.com/thank-you.html"
        />

        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Enter your message here"
          value={formData.message}
          onChange={handleInputChange}
          required
        />

        <button
          type="submit"
          disabled={!formData.name || !formData.email || !formData.message}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
