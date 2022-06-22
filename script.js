console.log('you can do this!')





// cached elements references 
const startGameButton = document.querySelector('#start-game-button')
const startGameContainer = document.querySelector('#Welcome-screen')
const gameViewContainer = document.querySelector('#Game-view')
const squareClicker = document.querySelector('.play-area')
const teamO = document.querySelector('.O')
const teamX = document.querySelector('.X')

//functions
function startGame () {
    startGameContainer.classList.add('hide')
    gameViewContainer.classList.remove('hide')
        
    
}
function squareClick (e) {
    console.log(e.target)
    e.target.innerText = "O"
   
    
    
}
function clickO (O){
    console.log(O.target)
   
   
    
}
function clickX (X){
    console.log(X.target)
  
    
}




//attach event listeners 
startGameButton.addEventListener('click', startGame)
squareClicker.addEventListener('click', squareClick)
teamO.addEventListener('click', clickO)
teamX.addEventListener('click', clickX)

