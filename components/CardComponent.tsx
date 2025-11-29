import Image from "next/image";

interface Props {
    pokemonWithIsCaptured: {
        id: number;
        name: string;
        imageUrl: string;
        isCaptured: boolean;
    }
    
}



const CardComponent = ({pokemonWithIsCaptured}: Props) => {
    return (
        <div className="max-h-50 w-28 border card-pokemon rounded-xl flex justify-center flex-col items-center p-2">
            <div className="card-pokemon-background-img h-25 rounded p-3 flex justify-center items-center">
                <Image 
                    height={50}
                    width={50}
                    className={`${!pokemonWithIsCaptured.isCaptured && 'brightness-0'} object-contain flex-1 h-auto w-auto`}
                    draggable={false}
                    src={pokemonWithIsCaptured.imageUrl}
                    alt={pokemonWithIsCaptured.name} 
                    loading="eager"
                ></Image>

            </div>
            <span className="font-color-green">{'No. ' + pokemonWithIsCaptured.id.toString().padStart(3, "0")}</span>
            <span className="font-color-subtitle">???</span>
        </div>
    )
}

export default CardComponent