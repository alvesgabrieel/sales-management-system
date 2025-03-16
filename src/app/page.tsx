"use client";

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { isUsernameValid } from "@/helpers/username-valid";
import { isPasswordValid } from "@/helpers/password-valid";

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "O nome deve ter pelo menos 3 caracteres.",
    }),

  username: z
    .string()
    .min(3, {
      message: "O nome de usuário deve ter pelo menos 3 caracteres.",
    })
    .refine((value) => isUsernameValid(value), {
      message: "O nome de usuário deve conter apenas letras, números e underscores.",
    }),

  email: z
    .string()
    .min(1, {
      message: "O email é obrigatório.",
    })
    .email({
      message: "Email inválido.",
    }),

  password: z
    .string()
    .min(6, {
      message: "A senha deve ter pelo menos 6 caracteres.",
    })
    .refine((value) => isPasswordValid(value), {
      message: "A senha deve conter pelo menos uma letra e um número.",
    }),
});

export default function Home() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: ""
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    
    console.log(values)
    //Enviar os dados para a API
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values)
    });

    if(response.ok) {
      alert("Usuário criado com sucesso!");
    }  
     else {
      const errorData = await response.json();
      alert(`Erro ao criar o usuário: ${errorData.error}`)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Cadastro</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome completo" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome de usuário" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu email de usuário" {...field} />
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
                    <Input placeholder="Digite sua senha" {...field} type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={form.formState.isSubmitting} className="w-full mt-4">
              Submeter
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
