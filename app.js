//Initialize the scores 

var scores, roundScore, activePlayer, gamePlaying;
init()

//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '';



document.querySelector('.btn-roll').addEventListener('click',function(){
  //check if game is active/playng
  if(gamePlaying){
    //1. Generate a random number
    var dice =  Math.floor(Math.random() * 6) + 1;

    //2. Display the result
    var diceDom = document.querySelector('.dice');
    //diceDom.src = 'dice-' + dice + '.png'
    diceDom.src = `dice-${dice}.png`
    document.querySelector('.dice').style.display = 'block'

    //3. Update the round score IF the rolled number was not a 1
    if(dice !== 1){

    //add score
      roundScore += dice;
      document.querySelector(`#current-${activePlayer}`).textContent = roundScore;
    } else {

      //Next player
      nextPlayer();
    }

  }

})


// EventListener for the hold button

document.querySelector('.btn-hold').addEventListener('click', function(){
  
  
  if(gamePlaying){
    // Add Current score to global score
    scores[activePlayer] += roundScore;

    // Update the UI
    document.querySelector(`#score-${activePlayer}`).textContent = scores[activePlayer]

    //Check if player won the game
    if(scores[activePlayer] >= 100){
      document.querySelector(`#name-${activePlayer}`).textContent = 'WINNER!'
      document.querySelector('.dice').style.display = 'none'
      document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner')
      document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active')
      gamePlaying = false;
    
    } else{
      //Nextplayer
      nextPlayer();
    }

  }
 
})


function nextPlayer(){
  //Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0'
  document.getElementById('current-1').textContent = '0'

  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none'
}

//New Game EventListener
document.querySelector('.btn-new').addEventListener('click', init)


function init (){
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true

document.getElementById('score-0').textContent = '0'
document.getElementById('score-1').textContent = '0'
document.getElementById('current-0').textContent = '0'
document.getElementById('current-1').textContent = '0'

document.querySelector('.dice').style.display = 'none'
document.querySelector('#name-0').textContent = 'PLAYER 1'
document.querySelector('#name-1').textContent = 'PLAYER 2'

document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');


}



