import React from "react";

export default function Modal(props) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="h-screen w-full  backdrop-filter backdrop-blur-sm bg-black bg-opacity-50 fixed inset-0 flex items-center justify-center z-50 modal-overlay"></div>
      <div className="bg-white rounded-lg p-8 md:w-[50rem] z-50 relative border border-gray-300 mx-2">
        <div className="modal-content">
          <button className="absolute top-0 right-0 p-4 cursor-pointer" onClick={() => props.setReadMoreModalIsOpen(false)}>
            &times;
          </button>
          <div className="modal-body text-justify">
            {/* Add your modal content here */}
            {props.readMoreContent}
          </div>
        </div>
      </div>
    </div>
  );
}
