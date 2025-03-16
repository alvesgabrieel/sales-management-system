import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import * as z from "zod";

import { db } from "@/lib/prisma";

// Definindo o schema Zod para garantir que os dados enviados são válidos
const userSchema = z.object({
  name: z.string().min(3),
  username: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
});

export async function POST(request: Request) {
  try {
    // Recuperando os dados enviados do front-end
    const data = await request.json();

    // Validação dos dados usando Zod
    const parsedData = userSchema.parse(data);

    // Verificando se o usuário já existe pelo email ou username
    const existingUser = await db.user.findFirst({
      where: {
        OR: [{ email: parsedData.email }, { username: parsedData.username }],
      },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: "Usuário ou email já existe." },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(parsedData.password, 10);

    // Criação do usuário no banco de dados
    const user = await db.user.create({
      data: {
        name: parsedData.name,
        username: parsedData.username,
        email: parsedData.email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return (
      NextResponse.json({ error: "Erro ao criar usuário." }, { status: 500 }),
      console.log(`Ocorreu um erro ao salvar os dados no BDD: ${error}`)
    );
  }
}
