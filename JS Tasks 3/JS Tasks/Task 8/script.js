/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
    this.a = +prompt('a reikšmė', 0);
    this.b = +prompt('b reikšmė', 0);
    this.sum = () => {console.log(this.a + this.b);};
    this.subtraction = () => {console.log(this.a - this.b);};
    this.multiplication = () => {console.log(this.a * this.b);};
    this.division = () => {console.log(this.a / this.b);};
}