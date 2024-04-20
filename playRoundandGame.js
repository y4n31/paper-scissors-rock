    function playRound(playerChoice, computerChoice) {

            computerChoice = getComputerChoice();
            
            playerChoice = capitilize(prompt('Choose your gesture (Rock / Paper / Scissors)'));

            
            win = `You won! ${playerChoice} beats ${computerChoice}`;
            lose = `You lost! ${computerChoice} beats ${playerChoice}`;
            draw = `Tie! You both chose ${computerChoice}`;

            let playerChoiceLower = playerChoice.toLowerCase();
            let computerChoiceLower = computerChoice.toLowerCase();

            if(playerChoiceLower == rock.toLowerCase() && computerChoiceLower == paper.toLowerCase()) {
                return lose;
            }
            else if(playerChoiceLower == paper.toLowerCase() && computerChoiceLower == scissors.toLowerCase()) {
                return lose;
            }
            else if(playerChoiceLower == scissors.toLowerCase() && computerChoiceLower == rock.toLowerCase()) {
                return lose;
            }
            else if (playerChoiceLower == computerChoiceLower) {
                return draw;
            }
            else if (playerChoiceLower !== rock.toLowerCase() && playerChoiceLower !== paper.toLowerCase() && playerChoiceLower !== scissors.toLowerCase()) {
                playGame();
            }
            else {
                return win;
            }
            
        }

    function playGame() {
                // loop to play 5 rounds
                for(let i = 0; i < 5; i++) {
                    returnVal = playRound(playerChoice, computerChoice);        //put playRound return value into variable

                    console.log(returnVal)      //print result of each round (return value of playRound)

                    // if statement to record score after each round
                    if(returnVal == win) {
                    playerScore++;
                    }
                    else if(returnVal == lose) {
                    computerScore++;
                    }
                }

                // if statement to announce the winner
                if(playerScore < computerScore) {
                    console.log(`Computer won with the score of ${computerScore}`)
                }
                else if(playerScore > computerScore) {
                    console.log( `Big win! You beat the computer with the score of ${playerScore}`);
                }
                else {
                    console.log('Tie! You both gained the same score')
                }
            }