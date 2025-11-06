// src/components/Modal.jsx
import React, { useEffect } from "react";
import { createPortal } from "react-dom";
export default function Modal({ open, onClose, title, children }) {
  
    const container = typeof window !== "undefined" ? document.body : null;

  if (!open || !container) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] overflow-y-scroll flex items-center justify-center bg-black/50 backdrop-blur-sm p-10"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg sm:max-w-2xl rounded-2xl bg-base-100 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>,container
  );
}
