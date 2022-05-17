let arrRandom = [];
let numRandom;
let numeri = document.getElementById("numeri");
let numeroG;

for (let i = 0; i < 5; i++) {

    numRandom = (Math.floor(Math.random() * 10)  +1);
    arrRandom.push(numRandom);

};
console.log(arrRandom);

numeri.innerHTML = arrRandom;


const divEl = document.getElementById("timer");
let seconds = 5;

const counting = setInterval(
    function () {
        divEl.innerHTML = seconds;
        if (seconds === 0) {
            numeri.style.display = 'none';
            clearInterval(counting);
            timer.style.display = 'none';
            const divAttesa = document.getElementById("timer2")
            let attesa = 2;
            const counting2 = setInterval(
            function () {
                divAttesa.innerHTML = attesa;
                if (attesa === 0) {
                    numeri.style.display = 'none';
                    clearInterval(counting2);

                    for (let i = 0; i < 5; i++) {
                        numeroG = prompt("inserisci uno dei numeri visti precedentemente");
                        let presenza = arrRandom.includes(numeroG);
                        console.log(presenza);
                        if (presenza = true) {
                            console.log("Bravo " + numeroG + " è uno dei numeri visti precedentemente");
                            
                        } else if (presenza = false) {
                            console.log("hai sbagliato " + numeroG + " non è uno dei numeri visti");
                        }
                    }
                    




                } else {        
                    attesa--;
                }

    }
    , 1000);
        } else {
            seconds--;
        }

    }
    , 1000);
