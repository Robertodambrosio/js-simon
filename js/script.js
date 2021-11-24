//********Visualizzare in pagina 5 numeri casuali.

const container = document.getElementById('container');
container.innerHTML = randomNum();

function randomNum() {
    let numbers = [];
    for (var i = 0; i < 5; i++)
    {
    numbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return numbers;
}
