import { FaRegUserCircle } from "react-icons/fa";
import Button from "./Button";
import EditUser from "@/app/components/Modal/EditUser";
import { toast } from "react-toastify";

const Card = () => {
  const handleInativeUserClick = () => {
    toast.success("Usuário Inativado", {
      position: "bottom-center",
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure className="w-[200px]">
        <FaRegUserCircle />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Funcionário 1</h2>
        <p>Nome: </p>
        <p>Filial: </p>
        <p>Cargo:</p>
        <div className="container">
          <div className="flex flex-col lg:flex-row justify-between mt-3">
            <div className="mb-3 lg:mb-0">
              <EditUser />
              <Button
                onClick={handleInativeUserClick}
                variant="green"
                className="mt-3"
              >
                Inativar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
