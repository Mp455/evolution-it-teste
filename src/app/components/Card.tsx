// Card.tsx
import React, { useState } from "react";
import EditUser from "./Modal/EditUser";
import RegisterUser from "./Modal/RegisterUser";
import SupplyHistory from "./Modal/SupplyHistory";

interface CardProps {
  closeModal: () => void;
  cardData: {
    title: string;
    description: string;
    type: string;
  };
  isModalOpen: boolean;
  onModalOpen: () => void;
}

const Card: React.FC<CardProps> = ({
  closeModal,
  cardData,
  isModalOpen,
  onModalOpen,
}) => {
  const closeModalAndReturn = () => {
    closeModal();
  };

  return (
    <div>
      <div
        className={`w-[300px] text-center bg-primary text-white border shadow-xl rounded-lg p-4 my-4 cursor-pointer transition-transform transform hover:scale-105 hover:bg-primaryDarker hover:text-white ${
          isModalOpen ? "pointer-events-none" : ""
        }`}
        onClick={onModalOpen}
      >
        <h2 className="text-lg font-semibold">{cardData.title}</h2>
        <p>{cardData.description}</p>
      </div>

      {isModalOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md h-[400px] w-[500px]">
            <span
              className="absolute top-2 right-2 cursor-pointer"
              onClick={closeModalAndReturn}
            >
              &#10005;
            </span>
            {cardData.type === "register" && (
              <RegisterUser closeModal={closeModal} />
            )}
            {cardData.type === "edit" && <EditUser closeModal={closeModal} />}
            {cardData.type === "supply" && (
              <SupplyHistory closeModal={closeModal} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
