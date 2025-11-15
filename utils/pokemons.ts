import { Pokemon } from "@/interfaces/Pokemon.interface";
import { IMAGES } from "./get-images";


export const POKEMONS: Pokemon[] = [
    {
        id: 1,
        name: "Bulbasaur",
        image: IMAGES[0]
    },
    {
        id: 2,
        name: "Ivysaur",
        image: IMAGES[1]
    },
    {
        id: 3,
        name: "Venusaur",
        image: IMAGES[2]
    },
    {
        id: 4,
        name: "Charmander",
        image: IMAGES[3]
    },
]