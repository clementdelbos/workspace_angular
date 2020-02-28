class Gens {
    set renommer(n) {
        this._nom = n;
    }
    get recupnom() {
        return this._nom;
    }
}
let g = new Gens();
g.renommer = "toto";
let n = g.recupnom;
console.log(n);
