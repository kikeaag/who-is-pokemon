'use client'
import Image from 'next/image'
import pokeballImage from '@/public/pokeball.png'
import { useRouter } from 'next/navigation';

const PokeballButton = () => {
    const router = useRouter();
    return (
        <>
            <button 
                onClick={() => router.push("/pokemons")}
                className="fixed bottom-6 right-6 text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl hover:bg-red-600 transition-all"
            >
                <Image alt="pokeball" src={pokeballImage} />
            </button>
        </>
    )
}

export default PokeballButton