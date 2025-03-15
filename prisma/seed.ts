import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const products = await prisma.product.createMany({
    data: [
      {
        sku: "TR.BD.PA.0A",
        name: "Trucker, logo em Bordado, tecido Padrão, 0 Aplicações Extras",
        fullPrice: 33.9,
        discountedPrice: 29.9,
      },
      {
        sku: "TR.BD.PA.1A",
        name: "Trucker, logo em Bordado, tecido Padrão, 1 Aplicação Extra",
        fullPrice: 36.1,
        discountedPrice: 31.9,
      },
      {
        sku: "TR.BD.PA.2A",
        name: "Trucker, logo em Bordado, tecido Padrão, 2 Aplicações Extras",
        fullPrice: 38.3,
        discountedPrice: 33.9,
      },
      {
        sku: "TR.BD.PA.3A",
        name: "Trucker, logo em Bordado, tecido Padrão, 3 Aplicações Extras",
        fullPrice: 40.5,
        discountedPrice: 35.9,
      },
      {
        sku: "TR.BD.PA.4A",
        name: "Trucker, logo em Bordado, tecido Padrão, 4 Aplicações Extras",
        fullPrice: 42.7,
        discountedPrice: 37.9,
      },
      {
        sku: "AM.SK.PR.6A",
        name: "Americano, logo em Silk 3D, tecido Premium, 6 Aplicações Extras",
        fullPrice: 52.5,
        discountedPrice: 46.9,
      },
      {
        sku: "AM.SK.PR.7A",
        name: "Americano, logo em Silk 3D, tecido Premium, 7 Aplicações Extras",
        fullPrice: 54.7,
        discountedPrice: 48.9,
      },
      {
        sku: "AM.SK.PR.8A",
        name: "Americano, logo em Silk 3D, tecido Premium, 8 Aplicações Extras",
        fullPrice: 56.9,
        discountedPrice: 50.9,
      },
      {
        sku: "AM.AS.PA.0A",
        name: "Americano, logo em Aplique 3D, tecido Padrão, 0 Aplicações Extras",
        fullPrice: 37.1,
        discountedPrice: 32.9,
      },
      {
        sku: "BU.SK.PR.2A",
        name: "Bucket, logo em Silk 3D, tecido Premium, 2 Aplicações Extras",
        fullPrice: 42.7,
        discountedPrice: 37.9,
      },
      {
        sku: "BU.SK.PR.3A",
        name: "Bucket, logo em Silk 3D, tecido Premium, 3 Aplicações Extras",
        fullPrice: 44.9,
        discountedPrice: 39.9,
      },
      {
        sku: "BU.SK.PR.4A",
        name: "Bucket, logo em Silk 3D, tecido Premium, 4 Aplicações Extras",
        fullPrice: 47.1,
        discountedPrice: 41.9,
      },
      {
        sku: "BK.SK.PR.1A",
        name: "Boné Kite Surf, logo em Silk 3D, tecido Premium, 1 Aplicação Extra",
        fullPrice: 43.5,
        discountedPrice: 38.9,
      },
      {
        sku: "BK.SK.PR.2A",
        name: "Boné Kite Surf, logo em Silk 3D, tecido Premium, 2 Aplicações Extras",
        fullPrice: 45.7,
        discountedPrice: 40.9,
      },
      {
        sku: "BK.SK.PR.3A",
        name: "Boné Kite Surf, logo em Silk 3D, tecido Premium, 3 Aplicações Extras",
        fullPrice: 47.9,
        discountedPrice: 42.9,
      },
      {
        sku: "BK.SK.PR.4A",
        name: "Boné Kite Surf, logo em Silk 3D, tecido Premium, 4 Aplicações Extras",
        fullPrice: 50.1,
        discountedPrice: 44.9,
      },
      {
        sku: "CA.AL.PR.2A",
        name: "Chapéu Agro, logo em Aplique Laser, tecido Premium, 2 Aplicações Extras",
        fullPrice: 54.9,
        discountedPrice: 49.9,
      },
      {
        sku: "CA.AL.PR.3A",
        name: "Chapéu Agro, logo em Aplique Laser, tecido Premium, 3 Aplicações Extras",
        fullPrice: 57.1,
        discountedPrice: 51.9,
      },
      {
        sku: "KC.SK.PA.8A",
        name: "Bucket Caribe, logo em Silk 3D, tecido Padrão, 8 Aplicações Extras",
        fullPrice: 56.5,
        discountedPrice: 50.9,
      },
      {
        sku: "KC.AS.PA.0A",
        name: "Bucket Caribe, logo em Aplique 3D, tecido Padrão, 0 Aplicações Extras",
        fullPrice: 41.1,
        discountedPrice: 36.9,
      },
    ],
  });

  console.log({ products });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
