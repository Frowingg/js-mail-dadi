// generatore casuali di numero per una sfida a chi lancia il numero più alto tra user e computer

// mi collego al computer
const button = document.getElementById('play-button');

// quando clicco sul bottone
button.addEventListener('click',
    function() {

        // creo il numero del giocatore
        userNumber = Math.floor((Math.random() *6) + 1);
        document.getElementById('user-number').innerHTML = userNumber;

        // creo il numero del pc
        pcNumber = Math.floor((Math.random() *6) + 1);
        document.getElementById('pc-number').innerHTML = pcNumber;

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
