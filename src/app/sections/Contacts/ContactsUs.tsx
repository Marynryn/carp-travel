"use client";

import React from "react";

import Container from "../../../components/container";
import Title from "../../../components/title";
import Contacts from "./components/contacts";
import ContactForm from "./components/contact-form";

const ContactUs = () => {
  return (
    <section
      id="contacts"
      className="flex justify-center py-54 bg-cover bg-no-repeat md:py-16 xl:py-20 footer"
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
    </section>
  );
};
export default ContactUs;
