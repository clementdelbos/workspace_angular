interface Personne{
    
    age?: number;
    nom: string;
    age?:number;
}

class Contact implements Personne{
    nom: string;
    prenom: string;
    age?: number;

    constructor(nom: string, prenom: string, age?:number){
        this.nom = nom;
        this.prenom = prenom;
        this.age=age;
    }

    show(){
        console.log(`Hello ${this.nom}`);
        if(this.age){
        console.log(`age : ${this.age}`);
        }
    }


let c = new Contact("Lagaffe","Gaston",8);
c.show();

function add( a: {x: number, y:number}): number {
    return a.x + a.y;

}

var result: number = add({ x:2, y:5});
console.log(result);