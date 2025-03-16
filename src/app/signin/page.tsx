"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  username: z.string().min(1, {
    message: "Digite um nome de usuário.",
  }),

  password: z.string().min(1, {
    message: "Digite uma senha.",
  }),
});

const SignIn = () => {
  const router = useRouter();

  useEffect(() => {
    // Verifica se o usuário já está logado
    const token = localStorage.getItem("token");

    // Se estiver logado, redireciona para o dashboard
    if (token) {
      router.push("/dashboard");
    }
  }, [router]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        const { token } = await response.json();
        localStorage.setItem("token", token);
        alert("Login bem sucedido!");
        window.location.href = "/dashboard"; // Redireciona para o dashboard
      } else {
        const errorData = await response.json();
        alert(`Erro ao fazer login: ${errorData.error}`);
      }
    } catch (error) {
      alert("Erro ao se conectar com a API.");
      console.log("Erro:", error);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold">Entrar</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite seu nome de usuário"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite sua senha"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={form.formState.isSubmitting}
              className="mt-4 w-full"
            >
              Entrar
            </Button>
            <Button className="mt-4 w-full" asChild>
              <Link href="signup">Não possui uma conta? Cadastre-se</Link>
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SignIn;
