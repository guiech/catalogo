import { Shoe } from "../shoes/shoe";

export class Line {
    titulo: string;
    shoes: Shoe[];

    constructor(shoes : Shoe[], titulo : string){
        this.titulo = titulo;
        this.shoes=shoes;
    }
}


