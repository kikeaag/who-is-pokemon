import { Prisma } from '@/generated/prisma/client';
import { Pokemon } from '@/interfaces/Pokemon.interface';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import PokemonGame from './PokemonGame';

const Page = async () => {

    let pokedexComplete = false

    const myPokemons = await prisma.myPokemon.findMany({
        where: {
            userId: 2
        },
        select: {
            pokemonId: true
        },
    })

    const myPokemonsIds = myPokemons.map(pokemon => pokemon.pokemonId)

    let allPokemons: Pokemon[];

    if (myPokemonsIds.length === 0) {
        // TODO: checar si cuando no tienes pokemones el primero en mostrarte sera bulbasaur
        allPokemons = await prisma.pokemon.findMany(); 
    } else {
        allPokemons = await prisma.$queryRaw`
            SELECT *
            FROM Pokemon
            WHERE id NOT IN (${Prisma.join(myPokemonsIds)})
            ORDER BY RANDOM();
        `;
    }

    if(allPokemons.length === 0) {
        pokedexComplete = true
        allPokemons = await prisma.$queryRaw`
            SELECT *
            FROM Pokemon
            ORDER BY RANDOM();
        `;
    }

    const pokemonCorrect = allPokemons[0]

    const wrongPokemons: Pokemon[] = await prisma.$queryRaw`
        SELECT *
        FROM Pokemon
        ORDER BY RANDOM();
    `;

    const [p1, p2, p3] = wrongPokemons.filter(pokemon => pokemon.id !== pokemonCorrect.id)

    const answers = shuffleArray([pokemonCorrect, p1, p2, p3]);

    function shuffleArray<T>(array: T[]): T[] {
        const result = [...array];
        for (let i = result.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [result[i], result[j]] = [result[j], result[i]];
        }
        return result;
    }
    
    return (
        <div className='w-full h-full flex flex-col justify-center items-center p-5'>
            <Link className='w-full bg-secondary py-2 text-center text-secondary-foreground text-sm font-medium rounded-md' href={'/'}>Regresar</Link>
            <h1 className='text-2xl my-5 font-color-green font-bold text-center'>¿Quién es este pokémon?</h1>
            <PokemonGame answers={answers} pokemonCorrect={pokemonCorrect} pokedexComplete={pokedexComplete} />
            
        </div>
    )
}

export default Page;