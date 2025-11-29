import prisma from '@/lib/prisma';
import { POKEMONS } from '@/utils/pokemons'

async function main() {

  // Create a new user with a post
  const allPokemons = [...POKEMONS]
  const pokemons = allPokemons.map(p => ({
    id: p.id,
    name: p.name,
    imageUrl: p.imageUrl
  }))

  const createMany = await prisma.pokemon.createMany({
   data: pokemons
  })

  console.log('Pokemons created', createMany)
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