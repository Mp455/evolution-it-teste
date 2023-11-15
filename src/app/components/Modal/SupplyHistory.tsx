import Button from "@/components/Button";
import Input from "@/components/Input";
import Select from "@/components/Select";
import React from "react";
import { MdWorkHistory } from "react-icons/md";

const SupplyHistory = () => {
  const openModal = () => {
    const modal = document.getElementById(
      "my_modal_5"
    ) as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  const options = ["Últimos 10 dias", "Últimos 20 dias", "Últimos 30 dias"];

  return (
    <div>
      <Button onClick={openModal} className="btn shadow-xl ">
        Histórico de Abastecimento <MdWorkHistory size={15} />
      </Button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <MdWorkHistory />
          <h3 className="font-bold text-lg text-center pb-3">
            Histórico de Abastecimento
          </h3>
          <div className="mb-5">
            <p>Informe a placa do Veículo</p>
            <Input placeholder="Digite a placa do veículo" />
          </div>
          <div className="mb-5">
            <p>Selecione o Período</p>
            <Select options={options} />
          </div>
          <div className="flex justify-end">
            <div className="mr-3">
              <Button>Consultar</Button>
            </div>
            <div className="mr-3">
              <Button variant="outlined">Fechar</Button>
            </div>
            <div className="mr-3">
              <Button variant="green">Exportar</Button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default SupplyHistory;
