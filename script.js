document.getElementById('lastname').addEventListener('blur',displayMessage)
//Etape 1 : créer sa fonction ; étape 2 : créer un callback pour l'appeler
function displayMessage() {
    alert("Mais euh... On remercie pas quelqu'un de sortir d'une input, ça n'a pas de sens. \nIl vaudrait mieux le remercier lorsqu'il valide son input.");
}
