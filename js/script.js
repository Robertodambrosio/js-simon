//********Visualizzare in pagina 5 numeri casuali.

// const container = document.getElementById('container');
// container.innerHTML = randomNum();

// *********** Da lì parte un timer di 30 secondi.

const timer = setTimeout(guessNum, 2000); {

    let numbers = [];
    for (let i = 0; i < 5; i++)
    {
    numbers.push(Math.floor(Math.random() * 100) + 1);
    }

    document.getElementById('container').innerHTML = numbers;
    console.log(numbers);

    function guessNum (){
        let sceltaUser = []
        for (let i = 0; i < 5; i++) 
        {
         sceltaUser.push(parseInt(prompt('Inserisci un numero')));
         console.log(sceltaUser);
        }
}
}

