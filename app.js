const rock = document.querySelector('#rock')
let playerSelection;
rock.addEventListener('click', () => {
    playerSelection = rock.alt
})
console.log(playerSelection)