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
      <figure className="w-full">
        <FaRegUserCircle />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Funcionário 1</h2>
        <p>Click the button to watch on Jetflix app.</p>
        <div className=" flex modal-action">
          <EditUser />
          <Button onClick={handleInativeUserClick} variant="green">
            Inativar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
