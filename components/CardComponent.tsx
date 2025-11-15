import { Pokemon } from "@/interfaces/Pokemon.interface";
import Image from "next/image";



const CardComponent = ({id, name, image}: Pokemon) => {
    return (
        <div className="max-h-50 w-28 border card-pokemon rounded-xl flex justify-center flex-col items-center p-2">
            <div className="card-pokemon-background-img h-25 rounded p-3 flex justify-center items-center">
                <Image 
                    className=" object-contain flex-1"
                    draggable={false}
                    src={image}
                    alt={name} 
                ></Image>

            </div>
            <span className="font-color-green">{'No. ' + id.toString().padStart(3, "0")}</span>
            <span className="font-color-subtitle">???</span>
        </div>
    )
}

export default CardComponent