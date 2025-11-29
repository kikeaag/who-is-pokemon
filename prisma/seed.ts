import { POKEMONS } from "@/utils/pokemons";
import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from '@prisma/adapter-pg'
import 'dotenv/config'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
    {
        name: 'Kikemon',
        email: 'kike@gmail.com',
        password: '123456'
    },
];



export async function main() {
  await prisma.myPokemon.deleteMany()
  await prisma.user.deleteMany()
  await prisma.pokemon.deleteMany()
  await prisma.$executeRawUnsafe(
    'ALTER SEQUENCE "User_id_seq" RESTART WITH 1;'
  );

  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  const allPokemons = [...POKEMONS]
  const pokemons = allPokemons.map(p => ({
    id: p.id,
    name: p.name,
    imageUrl: p.imageUrl
  }))

  await prisma.pokemon.createMany({
   data: pokemons
  })
}

main();