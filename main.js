let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random() * jmena.length);
    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];
    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);
    // Výherní jméno si uložíme do pole k ostatním výherním
    tazenaJmena.unshift(vyherniJmeno);
    let seznam = document.querySelector('#seznam');
    seznam.innerHTML = tazenaJmena;

    let vyherce = document.querySelector('#vyherka');
    vyherce.innerHTML = vyherniJmeno;
    //počitadlo
    let počet = tazenaJmena.length;
    console.log(počet);
    document.querySelector('#počet').textContent = počet;    
}

//restartovat vyvolávač
function obnovitSeznam() {
        window.location.reload();
}