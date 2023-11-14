import React from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

interface RegisterUserProps {
  closeModal: () => void;
}

const RegisterUser: React.FC<RegisterUserProps> = ({ closeModal }) => {
  return (
    <div>
      <h2 className=" flex w-full justify-center">Cadasto de Usuário</h2>

      <p>Nome de Usuário</p>
      <Input></Input>
      <p>E-mail</p>
      <Input></Input>
      <p>Senha</p>
      <Input></Input>
      <div className="flex mt-8">
        <Button className="mt-8 flex w-full justify-center">
          Cadastrar Usuário
        </Button>
      </div>
    </div>
  );
};

export default RegisterUser;
