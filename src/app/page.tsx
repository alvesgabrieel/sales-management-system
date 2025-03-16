import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg transform rounded-lg bg-white p-12 shadow-xl transition-all hover:scale-105">
        <h2 className="mb-6 text-center text-3xl font-semibold text-gray-800">
          Bem-vindo ao Sistema de Cadastro de Vendas
        </h2>
        <p className="mb-6 text-center text-lg text-gray-600">
          Crie sua conta ou acesse a Dashboard
        </p>
        <div className="mt-8 flex justify-around space-x-4">
          <Button asChild>
            <Link href="/signup">Cadastrar</Link>
          </Button>
          <Button asChild>
            <Link href="/signin">Entrar</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

{
  /* <Button className="rounded-full" asChild>
            <Link href="/singin">Entrar</Link>
          </Button> */
}
