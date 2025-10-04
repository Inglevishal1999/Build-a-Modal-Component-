import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/solid'; // Heroicons close icon

function Modal({ open, onClose, children }) {
  return (
    <div
      onClick={onClose}
      className={`
        fixed inset-0 flex justify-center items-center bg-black/20 
        transition-opacity duration-300
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          relative bg-white rounded-xl shadow p-6 transition-all duration-300
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
        `}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-1 rounded-lg text-gray-400 bg-white hover:text-gray-600 hover:bg-gray-50"
        >
          <XMarkIcon className="w-5 h-5" />
        </button>

        {/* Modal Content */}
        {children}
      </div>
    </div>
  );
}

export default Modal;
