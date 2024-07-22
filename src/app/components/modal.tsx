"use client";

import React from "react";
import Button from "./button";

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function Modal({ show, children, onClose }: ModalProps) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 ">
      <div
        className="relative w-full h-full px-5  "
        style={{
          background: "var(--modal-background)",
          backdropFilter: "blur(25px)",
          padding: "170px 20px",
        }}
      >
        <div
          className="absolute top-11  right-5 "
          style={{ letterSpacing: " 1.8px" }}
        >
          <Button onClick={onClose}>Close</Button>
        </div>
        {children}
      </div>
    </div>
  );
}
