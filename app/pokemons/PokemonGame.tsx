'use client'

import { Pokemon } from "@/interfaces/Pokemon.interface"
import Image from "next/image"
import AnswersButtons from "./AnswersButtons";
import { useState } from "react";
import { addMyPokemons } from "../actions";

interface Props {
    answers: Pokemon[];
    pokemonCorrect: Pokemon;
    pokedexComplete: boolean;
}

const PokemonGame = ({answers, pokemonCorrect, pokedexComplete}: Props) => {

    const [showAnswers, setShowAnswers] = useState(true)
    const [showPokemon, setShowPokemon] = useState(false)
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

    const handlePokemonSelected = (pokemon: Pokemon) => {
        setShowAnswers(false)
        if(pokemon.name === pokemonCorrect.name) {
            setIsCorrect(true)
            if(!pokedexComplete) {
                addMyPokemons(pokemonCorrect)
            }
        } else {
            setIsCorrect(false)
        }
        setShowPokemon(true)
    }

    return (
    <>
        <div className='w-full md:w-1/2 h-3/4 bg-white flex justify-center rounded-2xl'>
            <Image
                loading="eager"
                width={300}
                height={200}
                draggable={false}
                className={`${ showPokemon ? '' : 'brightness-0'} p-10`} 
                alt={`${pokemonCorrect.name}`} 
                src={pokemonCorrect.imageUrl}>
            
            </Image>
        </div>
        {
            showAnswers && (
                <div className='w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5 my-5'>
                    <AnswersButtons pokemons={answers} pokemonSelected={handlePokemonSelected} />
                </div>
            )
        }
        {
            isCorrect === true && (
                <label>Pokemon Capturado!!!</label>
            )
        }
        {
            isCorrect === false && <label>Perdiste...</label>
        }
    </>
    )
}

export default PokemonGame