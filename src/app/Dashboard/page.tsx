// Dashboard.tsx
// ... (imports)
"use client";
import Card from "../components/Card";
import { useState } from "react";

const Dashboard = () => {
  const [currentModal, setCurrentModal] = useState<string | null>(null);

  const closeModal = () => {
    setCurrentModal(null);
    // Implemente a lógica para fechar o modal no Dashboard
  };

  // Dados específicos para cada Card
  const cardDataList = [
    {
      title: "Cadastro de Usuário",
      description: "Adicionar novo usuário",
      type: "register" as const,
      // Adicione outras propriedades conforme necessário
    },
    {
      title: "Editar Dados do Usuário",
      description: "Atualizar informações",
      type: "edit" as const,
      // Adicione outras propriedades conforme necessário
    },
  ];

  return (
    <div className="container mx-auto flex flex-col items-center justify-start h-screen bg-gray">
      <span className="text-xl mt-4">
        Bem-vindo ao <span className="text-primary font-medium">Dashboard</span>
      </span>
      <div className="flex justify-between mt-4 w-full">
        {cardDataList.map((cardData, index) => (
          <Card
            key={index}
            closeModal={closeModal}
            cardData={cardData}
            isModalOpen={cardData.type === currentModal}
            onModalOpen={() => setCurrentModal(cardData.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
