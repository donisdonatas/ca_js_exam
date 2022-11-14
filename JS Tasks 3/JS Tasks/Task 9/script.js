/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus su 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }
    wasExpensive() {
        return console.log(this.budget > 100_000_000 ? true : false);
    }
}

const matrix = new Movie('The Matrix', 'Wachowski Brothers', 63_000_000);
const knight = new Movie('The Dark Knight', 'Christopher Nolan', 185_000_000);