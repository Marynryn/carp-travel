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
      <div className="px-5 py-9 w-full flex justify-between items-center sm:w-480  md:w-768 md:px-8 md:pt-6 xl:w-1280 xl:mx-auto xl:pb-12">
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="md:hidden">
          <Button
            type="button"
            onClick={() => setModalOpen(true)}
            className="text-sm"
          >
            Menu
          </Button>
        </div>
        <div className="hidden md:block">
          <Navigation />
        </div>
        <Modal show={modalOpen} onClose={() => setModalOpen(false)}>
          <Navigation onClose={() => setModalOpen(false)} />
        </Modal>
      </div>
    </header>
  );
};
export default Header;
