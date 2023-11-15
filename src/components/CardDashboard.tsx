import Button from "./Button";

const CardDashboard = () => {
  return (
    <div className="hero mt-4">
      <img src="/pexels-tom-fisk-2231742.jpg" alt="" />
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Ei, funcionário?</h1>
          <p className="mb-5">
            Site está em manutenção no momento, aguarde enquanto a equipe de
            desenvolvedor implementa novas funcionalidades
          </p>
          <Button>Aguarde...</Button>
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;
