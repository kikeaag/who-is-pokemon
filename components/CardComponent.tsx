import { Pokemon } from "@/interfaces/Pokemon.interface";
import Image from "next/image";



const CardComponent = ({name, image}: Pokemon) => {
    return (
        <div className="h-120 w-full border rounded-3xl flex justify-center flex-col items-center">
            <Image 
                className="brightness-0 object-contain p-2 flex-1"
                draggable={false}
                src={image}
                alt={name} 
            ></Image>
            <span className="h-20 text-3xl">???</span>
        </div>
    )
}

export default CardComponent