"use client";
import RegisterContract from "../components/Modal/RegisterContract";
import EditUser from "../components/Modal/EditUser";
import RegisterUser from "../components/Modal/RegisterUser";
import ConsultEmployee from "../components/Modal/ConsultEmployee";
import SupplyHistory from "../components/Modal/SupplyHistory";

const Dashboard = () => {
  return (
    <div className="container mx-auto flex flex-col items-center justify-start h-screen bg-gray">
      <header>
        <span className="text-xl mt-4">
          Bem-vindo ao{" "}
          <span className="text-primary font-medium">Dashboard</span>
        </span>
      </header>
      <div className="flex flex-row space-x-4">
        <RegisterUser />
        <EditUser />
        <RegisterContract />
        <ConsultEmployee />
        <SupplyHistory />
      </div>
    </div>
  );
};

export default Dashboard;
