import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";

const Login = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source
          src="/pexels-tima-miroshnichenko-6170597 (2160p).mp4"
          type="video/mp4"
        />
      </video>

      <div className="flex justify-center items-center h-full">
        <div className="text-white text-center p-8 bg-black bg-opacity-50 rounded-lg">
          <div className="text-5xl font-bold">Evolution IT</div>
          <div className="text-lg mt-5 mb-3">Faça o login</div>
          <div className="flex flex-col items-center">
            <Input className="mb-2 w-full sm:w-[300px]" placeholder="Usuário" />
            <Input
              type="password"
              className="mb-4 w-full sm:w-[300px]"
              placeholder="Senha"
            />
            <Link href="/Dashboard">
              <Button variant="login">Entrar</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
