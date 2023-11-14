import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import { FaUserEdit } from "react-icons/fa";

interface EditUserProps {
  closeModal: () => void;
}

const EditUser: React.FC<EditUserProps> = ({ closeModal }) => {
  return (
    <div>
      <FaUserEdit />
      <h2 className=" flex w-full justify-center">Editar Usuário</h2>

      <p>Nome de Usuário</p>
      <Input></Input>
      <p>E-mail</p>
      <Input></Input>
      <p>Senha</p>
      <Input></Input>
      <div className="flex mt-8">
        <Button className="mt-8 flex w-full justify-center">
          Atualizar Usuário
        </Button>
      </div>
    </div>
  );
};

export default EditUser;
