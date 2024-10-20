import React from "react";

const Modal = ({ isOpen, handleClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg max-w-[100vw] max-h-[90vh] overflow-auto">
                {children}
            </div>
        </div>
    );
};

export default Modal;
