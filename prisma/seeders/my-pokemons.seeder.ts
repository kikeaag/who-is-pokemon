import prisma from '@/lib/prisma';

async function main() {

  await prisma.myPokemon.create({
   data: {
    pokemonId: 1,
    userId: 1,
    quantity: 1,
    id: 1
   }
  })

  console.log('SUCCESS!!!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })