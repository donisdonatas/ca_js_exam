/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

const clickBtn = document.getElementById('btn__element');
clickBtn.addEventListener('click', addToState);

function addToState() {
    let currentState = document.getElementById('btn__state').innerHTML;
    document.getElementById('btn__state').textContent = Number(currentState) + 1;
}