class Gens{
    private nom : string;

    set renommer(n: string){

        this._nom = n;
    }

    get recupnom(): string{

        return this._nom;
    }
}

let g = new Gens();

g.renommer = "toto";

let n = g.recupnom;

console.log(n);