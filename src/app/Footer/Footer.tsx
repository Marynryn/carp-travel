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
      className="flex justify-center py-54 bg-cover bg-no-repeat md:py-16 xl:py-20"
      style={{
        backgroundImage: "url('/img/bgfooter.webp')",
      }}
    >
      <Container>
        <Title>
          Contact <span className="font-medium">us</span>
        </Title>
        <div className="xl:flex">
          <Contacts />
          <ContactForm />
        </div>
      </Container>
    </Element>
  );
};
export default Footer;
