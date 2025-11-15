'use client'
import CardComponent from "@/components/CardComponent"
import { Pokemon } from "@/interfaces/Pokemon.interface"
import { useRouter } from "next/navigation";

import { IMAGES } from "@/utils/get-images"
import pokeballImage from '@/public/pokeball.png'
import Image from "next/image"

const pokemons: Pokemon[] = [
  {
    id: 1,
    name: 'Bulbasaur',
    image: IMAGES[0]
  },
  {
    id: 2,
    name: 'Ivysaur',
    image: IMAGES[1]
  },
  {
    id: 3,
    name: 'Venasaur',
    image: IMAGES[2]
  },
  {
    id: 4,
    name: 'Charmander',
    image: IMAGES[3]
  },
]

export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    router.push("/pokemons");
  }

  return (
    <div className=" w-full p-5 grid grid-cols-3 md:grid-cols-6 items-center font-sans dark:bg-black gap-3">
      {
        pokemons.map((pokemon) => {
          return <div key={pokemon.id}>
            <CardComponent {...pokemon} />
          </div> 
        })
      }
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-red-600 transition-all"
      >
        <Image alt="pokeball" src={pokeballImage} />
      </button>
    </div>
  )
}
