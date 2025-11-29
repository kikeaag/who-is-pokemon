'use client'
import { Button } from "@/components/ui/button"
import { Pokemon } from "@/interfaces/Pokemon.interface"

interface Props {
    pokemons: Pokemon[];
    pokemonSelected: (p: Pokemon) => void;
}

const AnswersButtons = ({ pokemons, pokemonSelected }: Props) => {
    return <>
        {
            pokemons.map(p => {
                return <Button onClick={()=>{pokemonSelected(p)}} className='' size={'lg'} variant="default" key={p.id}  >{p.name}</Button>
            })
        }
    </>
}

export default AnswersButtons