'use server'

import { Pokemon } from "@/interfaces/Pokemon.interface"
import { prisma } from "@/lib/prisma"

export const addMyPokemons = async (newPokemon: Pokemon) => {

    await prisma.myPokemon.create({
        data: {
            pokemonId: newPokemon.id,
            userId: 2,
            quantity: 1,
        }
    })

    
}