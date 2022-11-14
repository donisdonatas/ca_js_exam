/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

const cars = {};

async function fetchData() {
    try {
        let response = await fetch(ENDPOINT);
        if (response.ok) {
            cars.arr = await response.json();
            showCars(cars.arr);
        }
    } catch (error) {
        console.error(error);
    }
}

fetchData();

function showCars(cars) {
    const output = document.getElementById('output');
    cars.forEach(car => {
        const brand = document.createElement('p');
        brand.className = 'brandName';
        brand.textContent = car.brand;

        const modelsList = document.createElement('ul');
        car.models.forEach(model => {
            const li = document.createElement('li');
            li.textContent = model;
            modelsList.append(li);
        });
        output.append(brand, modelsList);
    });
}