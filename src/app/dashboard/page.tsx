"use client";

import { motion } from "framer-motion";
import { BarChart2, ShoppingBag, TrendingUp, Users } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/signin"); // Redireciona para login caso o token não exista
    } else {
      setIsAuthenticated(true); // Marca como autenticado
    }
  }, [router]);

  const handleLogout = () => {
    // Remover o token do localStorage
    localStorage.removeItem("token");

    // Redirecionar para a página de login
    router.push("/signin");
  };

  if (!isAuthenticated) {
    return <div>Carregando...</div>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <header className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-900">Dashboard</h1>
          <div className="flex gap-5">
            <Button className="rounded-xl bg-black text-white hover:bg-gray-800">
              Nova Venda
            </Button>
            <Button
              onClick={handleLogout}
              className="rounded-xl bg-red-700 text-white hover:bg-red-500"
            >
              Logout
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="rounded-2xl shadow-md">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Total de Vendas
                </CardTitle>
                <ShoppingBag className="h-5 w-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">R$ 25.300</p>
                <p className="text-sm text-gray-500">+10% este mês</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="rounded-2xl shadow-md">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Novos Clientes
                </CardTitle>
                <Users className="h-5 w-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">320</p>
                <p className="text-sm text-gray-500">+5% este mês</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="rounded-2xl shadow-md">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Crescimento
                </CardTitle>
                <TrendingUp className="h-5 w-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-gray-900">15%</p>
                <p className="text-sm text-gray-500">
                  comparado ao mês passado
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }}>
            <Card className="rounded-2xl shadow-md">
              <CardHeader className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-gray-500">
                  Relatórios
                </CardTitle>
                <BarChart2 className="h-5 w-5 text-gray-400" />
              </CardHeader>
              <CardContent>
                <Button className="w-full rounded-xl bg-black text-white hover:bg-gray-800">
                  Ver Detalhes
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
