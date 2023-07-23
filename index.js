let arr = ['rock', 'scissors', 'paper'];

let userName = prompt('Please, enter your name');

if (userName !== null) {
  if (userName === '') {
    userName = 'User';
  }

  let userScore = 0;

  let computerScore = 0;
  
  while (userScore < 3 && computerScore < 3) {
    let userMove = prompt('Rock, Scissors, Paper... Please make your move');

    if (userMove !== null) {
      let rand = Math.floor(Math.random() * arr.length);
      let computerMove = arr[rand];
  
      if (arr.includes(userMove)) {
        if (userMove === computerMove) {
          alert(`Computer move is: ${computerMove}`);
        } else {
          if ((userMove === 'rock' && computerMove === 'scissors') 
            || (userMove === 'scissors' && computerMove === 'paper')
            || (userMove === 'paper' && computerMove === 'rock')) {
        
            alert(`Computer move is: ${computerMove}`);
      
            userScore++;
      
            alert(`You won this round: Current count is ${userName}: ${userScore} Computer ${computerScore}`);
      
          } else { 
              alert(`Computer move is: ${computerMove}`);
      
              computerScore++;
            
              alert(`Computer won this round: Current count is ${userName}: ${userScore} Computer ${computerScore}`);
            }
          } 
      } 
    } else {
      alert('You aborted this game. To start new game just refresh the page.')
      break;
    }
  }
  
  if ((userScore > computerScore) && (userScore === 3)) {
    alert(`Congratulations. You won this game. Count - You: ${userScore} : Computer ${computerScore}`);

    if (confirm('Do you want to start new game?')) {
      window.location.reload();
    }
  }

  if ((computerScore > userScore) && (computerScore === 3)) {
    alert(`Sorry. You lost this game. Count - You: ${userScore} : Computer ${computerScore}`);

    if (confirm('Do you want to start new game?')) {
      window.location.reload();
    }
  }
} else {
  alert('You aborted this game. To start new game just refresh the page.')
}



/* console.log(userScore, ' ', computerScore ); */