import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import Select from "@/components/Select";
import React from "react";
import { FaFileContract } from "react-icons/fa";

const RegisterContract = () => {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_3"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const options = ["Limpeza", "Tecnologia", "Recursos Humanos"];

  return (
    <div>
      <Button onClick={openModal} className="btn shadow-xl ">
        Cadastrar Contrato <FaFileContract size={15} />
      </Button>
      <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <FaFileContract />
          <h3 className="font-bold text-lg text-center">
            Cadastro de Contrato
          </h3>
          <div className="mb-5">
            <p>Cliente</p>
            <Input />
          </div>
          <div className="mb-5">
            <p>Tipo de Serviço</p>
            <Select options={options} />
          </div>
          <div className="mb-5">
            <p>Valor do Contrato</p>
            <Input />
          </div>
          <div className="flex flex-col sm:flex-row sm:w-full justify-between mb-5">
            <div className="mb-5 sm:mb-0 ">
              <p>Data de Início</p>
              <DatePicker onChange={() => {}} />
            </div>
            <div className="mb-5 ">
              <p>Data de Término</p>
              <DatePicker onChange={() => {}} />
            </div>
          </div>

          <div className="mb-5">
            <p>Contrato Ativo</p>
            <Input />
          </div>
          <div className="modal-action">
            <Button variant="danger">Cancelar</Button>

            <Button>Cadastrar Contrato</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default RegisterContract;
