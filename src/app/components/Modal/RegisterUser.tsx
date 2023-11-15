import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";

const RegisterUser = () => {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_1"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <Button onClick={openModal} className="btn shadow-xl ">
        Cadastrar Usuário
      </Button>
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg text-center">Cadastro de Usuário</h3>
          <div className="mb-5">
            <p>Nome de Usuário</p>
            <Input />
          </div>
          <div className="mb-5">
            <p>E-mail</p>
            <Input />
          </div>
          <div className="mb-5">
            <p>Senha</p>
            <Input />
          </div>
          <div className="modal-action">
            <form method="dialog">
              <Button>Cadastrar Usuário</Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RegisterUser;
