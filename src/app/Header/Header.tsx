"use client";

import Link from "next/link";
import Logo from "./components/logo";
import Button from "../components/button";
import { useState } from "react";
import Modal from "../components/modal";
import Navigation from "./components/navigation";

const Header: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <header className="flex justify-center">
      <div className="px-5 py-9 w-full flex justify-between items-center sm:w-440  md:w-704 md:px-8 xl:w-1232 xl:mx-auto">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="">
          <Button
            type="button"
            onClick={() => setModalOpen(true)}
            className="text-sm"
          >
            Menu
          </Button>
        </div>
        <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
          <Navigation />
        </Modal>
      </div>
    </header>
  );
};
export default Header;
