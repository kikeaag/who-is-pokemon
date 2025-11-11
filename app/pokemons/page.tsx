'use client'

import React, { useState } from 'react'
import image from '../../public/1.png'
import Image from 'next/image';

const answers = [
    {id: 1, name: 'Snorlax'},
    {id: 2, name: 'Mew'},
    {id: 3, name: 'Bulbasaur'},
    {id: 4, name: 'Charmander'},
]

const Page = () => {
    const [hide, setHide] = useState(true)

    const handleClick = (pokemonId: number) => {
        if(pokemonId === 3) {
            setHide(false)
        }
    }
    return (
        <div className='w-full h-dvh flex flex-col justify-center items-center bg-red-500 p-5'>
            <h1 className='text-3xl my-5 text-white'>¿Quién es este pokémon?</h1>
            <div className='w-full md:w-1/2 h-3/4 bg-white flex justify-center rounded-2xl'>
                <Image 
                    width={500}
                    height={500}
                    draggable={false}
                    className={`${hide ? 'brightness-0' : ''}`} 
                    alt='pokemon' 
                    src={image}>
                
                </Image>
            </div>
            <div className='w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-5 my-5'>
                {
                    answers.map(p => {
                        return <button
                            onClick={() => {handleClick(p.id)}}
                            className='p-5 w-full md:w-auto rounded-2xl bg-blue-700 text-white cursor-pointer hover:bg-blue-400' key={p.id}>
                            {p.name}
                        </button>
                    })
                }
                
            </div>
        </div>
    )
}

export default Page;