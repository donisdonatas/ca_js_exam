/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', convertWeight);

function convertWeight() {
    let weight_kg = document.getElementById('search').value;
    let weight_lb = (weight_kg * 2.2046).toFixed(3);
    let weight_gr = (weight_kg / 0.001).toFixed(0);
    let weight_oz = (weight_kg * 35.274).toFixed(3);

    let output = `Your weight in:<br>Pounds (lb) - ${weight_lb};<br>Grams (g) - ${weight_gr};<br>Ounces (oz) - ${weight_oz}`;
    document.getElementById('output').innerHTML = output;
}