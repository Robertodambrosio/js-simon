//********Visualizzare in pagina 5 numeri casuali.
// *********** Da lì parte un timer di 30 secondi.

const timer = setTimeout(guessNum, 2000); 


    let numbers = [];
    for (let i = 0; i < 5; i++)
    {
    numbers.push(Math.floor(Math.random() * 100) + 1);
    }

    const p = document.createElement('p');
    p.innerText = "Hai 30 secondi per memorizzare questi numeri!";      
    const containerNum = document.getElementById('container-numbers')
    container.innerHTML = numbers;
    document.getElementById("container").appendChild(p);

    console.log(numbers);

    let sceltaUser = [];
    let score = 0;
    function guessNum () {
        container.innerHTML = '';
        for (let i = 0; i < 5; i++) 
        {
        let scelta = parseInt(prompt('Inserisci un numero'));
        sceltaUser.push(scelta);
         console.log(sceltaUser);
         if (sceltaUser[i]==numbers[i]) {
            score++;
            
         }
        }
        console.log(score);
        alert('Ne hai indovinati: ' + score)
    }
