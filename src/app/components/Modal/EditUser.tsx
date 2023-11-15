import Button from "@/components/Button";
import Input from "@/components/Input";
import React from "react";
import { FaUserEdit } from "react-icons/fa";

const EditUser = () => {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_2"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <Button onClick={openModal} className="btn shadow-xl ">
        Editar Usuário <FaUserEdit size={15} />
      </Button>
      <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <FaUserEdit />
          <h3 className="font-bold text-lg text-center">Atualizar Dados</h3>
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
              <Button>Atualizar</Button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default EditUser;
