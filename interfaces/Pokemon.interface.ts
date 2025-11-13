import { StaticImageData } from "next/image";

export interface Pokemon {
    id: number;
    name: string;
    image: StaticImageData;
}