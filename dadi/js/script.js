// mi collego al computer
const button = document.getElementById('play-button');

// quando clicco sul bottone
button.addEventListener('click',
    function() {

        // creo il numero del giocatore
        userNumber = Math.floor((Math.random() *6) + 1);
        document.getElementById('user-number').innerHTML = userNumber;
        // document.getElementById('user-number').innerHTML = Math.floor((Math.random() *6) + 1);

        // creo il numero del pc
        pcNumber = Math.floor((Math.random() *6) + 1);
        document.getElementById('pc-number').innerHTML = pcNumber;
        // document.getElementById('pc-number').innerHTML = Math.floor((Math.random() *6) + 1);

        // informo il giocatore del risultato della partita
        if(userNumber > pcNumber) {
            alert('hai vinto!')
        } else if (userNumber == pcNumber){
            alert('pareggio!')
        } else{
            alert('hai perso!')
        }
    }
    
)
