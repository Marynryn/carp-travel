"use client";
import React from "react";
import Container from "../components/container";

import Contacts from "./components/contacts";
import ContactForm from "./components/contact-form";
import { Element } from "react-scroll";
import Title from "../components/title";

const Footer = () => {
  return (
    <Element
      name="contacts"
      id="contacts"
      className="flex justify-center py-56 bg-cover bg-no-repeat md:py-16"
      style={{
        backgroundImage: "url('/img/bgfooter.webp')",
      }}
    >
      <Container>
        <Title>
          Contact <span className="font-medium">us</span>
        </Title>
        <Contacts />
        <ContactForm />
      </Container>
    </Element>
  );
};
export default Footer;
