"use client";
import RegisterContract from "../components/Modal/RegisterContract";
import EditUser from "../components/Modal/EditUser";
import RegisterUser from "../components/Modal/RegisterUser";
import ConsultEmployee from "../components/Modal/ConsultEmployee";
import SupplyHistory from "../components/Modal/SupplyHistory";
import Header from "@/components/Header";
import CardDashboard from "@/components/CardDashboard";
import Footer from "@/components/Footer";

const Dashboard = () => {
  return (
    <div className="mx-auto flex flex-col items-center justify-start h-screen bg-gray">
      <Header />
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between mt-3">
          <div className="mb-3 lg:mb-0">
            <RegisterUser />
          </div>
          <div className="mb-3 lg:mb-0">
            <EditUser />
          </div>
          <div className="mb-3 lg:mb-0">
            <RegisterContract />
          </div>
          <div className="mb-3 lg:mb-0">
            <ConsultEmployee />
          </div>
          <div className="mb-3 lg:mb-0">
            <SupplyHistory />
          </div>
        </div>
        <CardDashboard />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
