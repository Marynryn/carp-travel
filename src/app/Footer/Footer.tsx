import React from "react";
import Container from "../components/container";
import Heading from "../components/heading";
import Contacts from "./components/contacts";
import ContactForm from "./components/contact-form";

const Footer = () => {
  return (
    <footer
      id="contacts"
      className="flex justify-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url('/img/bgfooter.webp')",

        padding: "56px 0",
      }}
    >
      <Container>
        <Heading
          tag="h2"
          className="uppercase text-custom font-thin tracking-custom-heading"
        >
          Contact <span className="font-medium">us</span>
        </Heading>
        <Contacts />
        <ContactForm />
      </Container>
    </footer>
  );
};
export default Footer;
