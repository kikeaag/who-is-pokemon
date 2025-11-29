import CardComponent from "@/components/CardComponent"

import { prisma } from "@/lib/prisma"
import PokeballButton from "./PokeballButton"


export default async function Home() {

  const myPokemons = await prisma.myPokemon.findMany({
    where: {
      userId: 2
    },
    include: {
      pokemon: true
    }
  })

  const allPokemons = await prisma.pokemon.findMany()

  const allPokemonsWithCaptured = allPokemons.map(pokemon => {

    const isCaptured = myPokemons.some(myPokemon => myPokemon.pokemonId === pokemon.id)

    return {
      id: pokemon.id,
      name: pokemon.name,
      imageUrl: pokemon.imageUrl,
      isCaptured: isCaptured
    }

  })

  return (
    <div className=" w-full p-5 grid grid-cols-3 md:grid-cols-6 items-center font-sans dark:bg-black gap-3">
      {
        allPokemonsWithCaptured.map((pokemon) => {
          return <div key={pokemon.id}>
            <CardComponent pokemonWithIsCaptured={pokemon} />
          </div> 
        })
      }
      <PokeballButton />
      
    </div>
  )
}
