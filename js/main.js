/***************************
 * VENDITA BIGLIETTO TRENO
 ***************************/

/** 
 * REFERENZE ELEMENTI
 */
var container = document.getElementById('biglietto');
var bottoneGenera = document.getElementById('bottoneGenera');
var buttonCancel = document.getElementById('bottoneAnnulla')


/**
 * EVENTI
 */

// Generare il biglieto
bottoneGenera.addEventListener('click', 
    function() {
        // Ottieni valori input utente
        var nome = document.getElementById('nome').value;
        var kmDaPercorrere = document.getElementById('km').value;
        var fasciaEta = document.getElementById('fascia-eta').value;


        if (kmDaPercorrere <= 0 || isNaN(kmDaPercorrere)) {
            window.scroll(0, 0)
            container.classList.remove('show')
            container.classList += ' hidden'
            alert('Devi inserire una distanza da percorrere un numero maggiore di 0.\n\n')
            kmDaPercorrere = ''
        }
        else {
            // Calcolo biglietto
            var prezzoKm = 0.21;
            var costoBiglietto = prezzoKm * kmDaPercorrere;
            var offerta = 'Biglietto Standard';

            // Calcoliamo il costo e l'offerta applicata
            if (fasciaEta == 'minorenne') {
                // 20% sconto
                costoBiglietto -= costoBiglietto * 0.2;
                offerta = 'Sconto minorenne';
            } else if (fasciaEta == 'over65') {
                //40% sconto
                costoBiglietto -= costoBiglietto * 0.4;
                offerta = 'Sconto Over 65';
            }

            // Controllo dei decimali
            costoBiglietto = '€ ' + costoBiglietto.toFixed(2);

            // Numero random per la carrozza da 1 a 9
            var numCarrozza = Math.floor( Math.random() * 9) + 1;

            // Numero random per codice cp da 90000 a 100000
            var codiceCp = Math.floor( Math.random() * (100000 - 90000) ) + 90000;

            // Inseriamo valori nella pagina
            document.getElementById('nome-passeggero').innerHTML = nome;
            document.getElementById('offerta-applicata').innerHTML = offerta;
            document.getElementById('carrozza').innerHTML = numCarrozza;
            document.getElementById('codice-cp').innerHTML = codiceCp;
            document.getElementById('costo').innerHTML = costoBiglietto;

            // Show ticket
            container.classList.remove('hidden')
            container.classList += ' show'

            // Scrolling to the bottom of the page
            window.scroll(0, document.getElementsByTagName('body')[0].scrollHeight)

            // Disable button
            bottoneGenera.disabled = true
        }
    }   
)


// Reset biglietto
buttonCancel.addEventListener('click', 
    function() {
        // A function resetting to default value input and select elements

        document.getElementById('nome').value = ''
        document.getElementById('km').value = ''
        document.getElementById('fascia-eta').value = 'minorenne'

        container.classList.remove('show')
        container.classList += ' hidden'

        document.getElementById('nome-passeggero').innerHTML = ''
        document.getElementById('offerta-applicata').innerHTML = ''
        document.getElementById('carrozza').innerHTML = ''
        document.getElementById('codice-cp').innerHTML = ''
        document.getElementById('costo').innerHTML = ''

        // Scrolling to the top of the page
        // WARNING: NOT WORKING WITH FIREFOX
        window.scroll(0, 0)

        // Enable button
        bottoneGenera.disabled = false
    }
)

