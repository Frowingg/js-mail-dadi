const mailList = ['luffeisoddeyei-7392@yopmail.com','crigreuticreige-3155@yopmail.com','xoinipoutife-3126@yopmail.com',
                  'fonopralletra-6714@yopmail.com','nakubraboce-1533@yopmail.com','gruprofrasugre-8044@yopmail.com']

// creo le variabili
let mailFound = false;
let message;

// seleziono il button
const button = document.getElementById('email-button');

// quando premo il bottone
button.addEventListener('click',
    function() {
    let userMail = document.getElementById('email').value;

    //scorro la lista e controllo se la mail è all'interno
    for(let i=0; i <= mailList.length - 1; i++) {
        if (userMail === mailList[i]) {
            mailFound = true;
        }
    }
    
    //se la trovo comunico all'utente che può acceddere, senno gli chiedo di iscriversi
    if (mailFound) {
        message =  'Puoi accedere'
    } else {
        message = 'Non risulti registrato al sito'
    }
    document.getElementById('message').innerHTML = message
}    
)




