import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import Card from "@/components/Card";
import React from "react";
import RegisterUser from "./RegisterUser";
import { PiUsersThreeFill } from "react-icons/pi";

const ConsultEmployee = () => {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_4"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const options = ["Todas as Filias", "Filial 1", "Filial 2", "Filial 3"];

  return (
    <div>
      <Button onClick={openModal} className="btn shadow-xl ">
        Consultar Funcionário <PiUsersThreeFill size={15} />
      </Button>
      <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <PiUsersThreeFill />
          <h3 className="font-bold text-lg text-center pb-3">
            Consulta de Funcionário
          </h3>
          <div className="mb-5">
            <p>Pesquisar Funcionário</p>
            <Input />
          </div>
          <div className="mb-5">
            <p>Filtrar por Filial</p>
            <Select options={options} />
          </div>
          <Card />

          <div className="modal-action">
            <Button variant="danger">Cancelar</Button>
            <RegisterUser />
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ConsultEmployee;
