/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

const showUsersBtn = document.getElementById('btn');
showUsersBtn.addEventListener('click', fetchData);

const ENDPOINT = 'https://api.github.com/users';

const users = {};

async function fetchData() {
    try {
        let response = await fetch(ENDPOINT);
        if (response.ok) {
            users.arr = await response.json();
            showUsers(users.arr);
        }
    } catch (error) {
        console.error(error);
    }
}

function showUsers(users) {
    const msg = document.getElementById('message');
    const output = document.getElementById('output');
    output.removeChild(msg);

    users.forEach(user => {
        const login = user.login;
        const avatar = user.avatar_url;

        const card = document.createElement('div');
        card.className = 'card';
        const figure = document.createElement('figure');
        const image = document.createElement('img');
        image.setAttribute('src', avatar);
        image.setAttribute('alt', `Avatar of user ${login}`);

        const loginText = document.createElement('h3');
        loginText.className = 'login';
        loginText.textContent = login;

        figure.append(image);
        card.append(loginText, figure);
        output.append(card);
    });
}