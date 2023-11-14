import Button from "@/components/Button";
import Input from "@/components/Input";
import Link from "next/link";
const Login = () => {
  return (
    <div className="flex justify-center h-screen">
      <div className="flex flex-row w-screen h-full">
        <video autoPlay loop muted className="w-1/2 h-full object-cover">
          <source
            src="/pexels-tima-miroshnichenko-6170597 (2160p).mp4"
            type="video/mp4"
          />
        </video>

        <div className=" bg-black w-1/2">
          <div className=" flex flex-col justify-center items-center h-full p-8">
            <div className="text-white flex justify-center font-bold text-7xl">
              Evolution IT
            </div>
            <div className="text-white mt-5 mb-3">Faça o login</div>
            <div>
              <Input className="mb-2 w-[400px]" placeholder="Usuário" />
              <Input type="password" placeholder="Senha" />
            </div>
            <Link href="/Dashboard">
              <Button className="mt-4 w-[400px]">Entrar</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
