import { playerSelections, playerSlection2 } from '/scripts/playerSelections.js';

//Home page
let ResetGame = document.getElementById('ResetGame');
let headerText = document.getElementById('headerText');
let headerText2 = document.getElementById('headerText2');
let selectGame = document.getElementById('selectGame');
let computerBtn = document.getElementById('computer');
let twoplayerBtn = document.getElementById('twoplayer');
let nextRoundBtn = document.getElementById('nextRoundBtn');

let computerText = document.getElementById('computerText');
let twoPlayerText = document.getElementById('twoPlayerText');

let computerScore = document.getElementById('computerScore');
let userScore = document.getElementById('userScore');
let play1Score = document.getElementById('play1Score');
let play2Score = document.getElementById('play2Score');
//Home page
let howToPlay = document.getElementById('howToPlay');
// Style of game 
let bestAll = document.getElementById('bestAll');
let bestAllplayer = document.getElementById('bestAllplayer');

let scores = document.getElementById('scores');
let scoresPlay = document.getElementById('scoresPlay');

//style compter
let best1 = document.getElementById('best1');
let best5 = document.getElementById('best5');
let best7 = document.getElementById('best7');
//style two player
let best1P = document.getElementById('best1P');
let best5P = document.getElementById('best5P');
let best7P = document.getElementById('best7P');

//computer selection
let compSelect = document.getElementById('compSelect');
let compRock = document.getElementById('compRock');
let compPaper = document.getElementById('compPaper');
let compSpock = document.getElementById('compSpock');
let compScissor = document.getElementById('compScissor');
let compLizard = document.getElementById('compLizard');

//player 1 selection
let player1Select = document.getElementById('player1Select');
let p1Rock = document.getElementById('p1Rock');
let p1Paper = document.getElementById('p1Paper');
let p1Spock = document.getElementById('p1Spock');
let p1Scissor = document.getElementById('p1Scissor');
let p1Lizard = document.getElementById('p1Lizard');

//player 2 selecttion
let player2Select = document.getElementById('player2Select');
let p2Rock = document.getElementById('p2Rock');
let p2Paper = document.getElementById('p2Paper');
let p2Spock = document.getElementById('p2Spock');
let p2Scissor = document.getElementById('p2Scissor');
let p2Lizard = document.getElementById('p2Lizard');
let nextRoundBtn2 = document.getElementById('nextRoundBtn2');

//computer vs user saved
let userComputerSelect = '';
let computerAnswer = '';

//player vs player saved
let player1 = '';
let player2 = '';

let computerWins = 0;
let playerWins = 0;
let round = 0;

let player1Wins = 0;
let player2Wins = 0;

let winnerWinnerChickenDinner = document.getElementById('winnerWinnerChickenDinner');
let loserLoserSuckLess = document.getElementById('loserLoserSuckLess');
let tie = document.getElementById('tie');
let winnerWinnerChickenDinnerPlayer1 = document.getElementById('winnerWinnerChickenDinnerPlayer1');
let winnerWinnerChickenDinnerPlayer2 = document.getElementById('winnerWinnerChickenDinnerPlayer2');

let playersVs = document.getElementById('playersVs');
let player1Name = document.getElementById('player1Name');
let Player2Name = document.getElementById('Player2Name');

let savedName1 = '';
let savedName2 = '';

let playerScoreName1 = document.getElementById('playerScoreName1');
let playerScoreName2 = document.getElementById('playerScoreName2');
// starting function to display starting text and buttons
function headerStartUp() {
    headerText.textContent = 'Welcome To';
    headerText.className = 'headerTxtStyle';
    headerText2.textContent = 'Rock, Paper, Scissors, Lizard, Spock';
    headerText2.className = 'headerTxtStyle';
    selectGame.className = 'gameSelect';
    computerBtn.className = 'homeBtnBG';
    twoplayerBtn.className = 'homeBtnBG';
    computerText.textContent = 'Vs. Computer';
    twoPlayerText.textContent = 'Vs. Player';
    howToPlay.classList.remove('hide');
}
headerStartUp();
//Calling it and the end of the function

// First Buttons to play against computer and player
computerBtn.addEventListener('click', function () {
    headerText.textContent = 'You choose to play against the computer';
    headerText2.textContent = 'Select your number of wins';
    startingBtnsFunction()
    bestAll.classList.remove('hide');
    RPSLS();
});
twoplayerBtn.addEventListener('click', function () {
    headerText.textContent = 'You choose to play against another person';
    headerText2.textContent = 'Enter your usernames';
    startingBtnsFunction()
    playersVs.classList.remove('hide');
});
//Ending of those buttons
player1Name.addEventListener('keydown', function (event) {
    playerNames()
});
function playerNames() {
    let chacters = /^[\S]+$/;
    if (event.key === 'Enter') {
        if (player1Name.value.match(chacters) && Player2Name.value.match(chacters)) {
            savedName1 = player1Name.value;
            savedName2 = Player2Name.value;
            bestAllplayer.classList.remove('hide');
            playersVs.classList.add('hide');
            headerText.textContent = '';
            headerText2.textContent = 'Select your number of wins';
        }
    }
}
Player2Name.addEventListener('keydown', function (event) {
    playerNames()
});
//Computer Best 1 of 1 -----------------------------------------------------------------------------
best1.addEventListener('click', function () {
    round = 1;
    headerText.textContent = 'Now choose your option';
    headerText2.textContent = '';
    compSelect.classList.remove('hide');
    bestAll.classList.add('hide');

    compRock.addEventListener('click', function () {
        userComputerSelect = compRock.value;
        computerVsPlayer()
    });

    compPaper.addEventListener('click', function () {
        userComputerSelect = compPaper.value;
        computerVsPlayer()
    });

    compSpock.addEventListener('click', function () {
        userComputerSelect = compSpock.value;
        computerVsPlayer()
    });

    compScissor.addEventListener('click', function () {
        userComputerSelect = compScissor.value;
        computerVsPlayer()
    });

    compLizard.addEventListener('click', function () {
        userComputerSelect = compLizard.value;
        computerVsPlayer()
    });
});
// Best of 5 computer ------------------------------------------------------------------------------------------
best5.addEventListener('click', function () {

    round = 3;
    computer5And7()

    compRock.addEventListener('click', function () {
        userComputerSelect = compRock.value;
        computerVsPlayer2()
    });

    compPaper.addEventListener('click', function () {
        userComputerSelect = compPaper.value;
        computerVsPlayer2()
    });

    compSpock.addEventListener('click', function () {
        userComputerSelect = compSpock.value;
        computerVsPlayer2()
    });

    compScissor.addEventListener('click', function () {
        userComputerSelect = compScissor.value;
        computerVsPlayer2()
    });

    compLizard.addEventListener('click', function () {
        userComputerSelect = compLizard.value;
        computerVsPlayer2()
    });
});
//Best of 7 computer -------------------------------------------------------------------------------
best7.addEventListener('click', function () {

    round = 4;
    computer5And7()

    compRock.addEventListener('click', function () {
        userComputerSelect = compRock.value;
        computerVsPlayer2()
    });

    compPaper.addEventListener('click', function () {
        userComputerSelect = compPaper.value;
        computerVsPlayer2()
    });

    compSpock.addEventListener('click', function () {
        userComputerSelect = compSpock.value;
        computerVsPlayer2()
    });

    compScissor.addEventListener('click', function () {
        userComputerSelect = compScissor.value;
        computerVsPlayer2()
    });

    compLizard.addEventListener('click', function () {
        userComputerSelect = compLizard.value;
        computerVsPlayer2()
    });
});
//Player vs player 1 of 1 ---------------------------------------------------------------------------------
best1P.addEventListener('click', function () {
    round = 1;
    headerText.textContent = savedName1 + ' choose your option';
    headerText2.textContent = '';
    player1Select.classList.remove('hide');
    bestAllplayer.classList.add('hide');
    playerSelections();
    playerSlection2()

    player1Rock.addEventListener('click', function () {
        player1 = player1Rock.value;
        headerChangeAndSelects()
    });

    player1Paper.addEventListener('click', function () {
        player1 = player1Paper.value;
        headerChangeAndSelects()
    });

    player1Spock.addEventListener('click', function () {
        player1 = player1Spock.value;
        headerChangeAndSelects()
    });

    player1Scissors.addEventListener('click', function () {
        player1 = player1Scissors.value;
        headerChangeAndSelects()
    });

    player1Lizard.addEventListener('click', function () {
        player1 = player1Lizard.value;
        headerChangeAndSelects()
    });
    player2Rock.addEventListener('click', function () {
        player2 = player2Rock.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Paper.addEventListener('click', function () {
        player2 = player2Paper.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Spock.addEventListener('click', function () {
        player2 = player2Spock.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Scissors.addEventListener('click', function () {
        player2 = player2Scissors.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Lizard.addEventListener('click', function () {
        player2 = player2Lizard.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
});
//Player vs player best of 5 -----------------------------------------------------------------------------------------------------
best5P.addEventListener('click', function () {
    round = 3;
    player5And7()
    playerSelections();
    playerSlection2();

    player1Rock.addEventListener('click', function () {
        player1 = player1Rock.value;
        headerChangeAndSelects()
    });

    player1Paper.addEventListener('click', function () {
        player1 = player1Paper.value;
        headerChangeAndSelects()
    });

    player1Spock.addEventListener('click', function () {
        player1 = player1Spock.value;
        headerChangeAndSelects()
    });

    player1Scissors.addEventListener('click', function () {
        player1 = player1Scissors.value;
        headerChangeAndSelects()
    });

    player1Lizard.addEventListener('click', function () {
        player1 = player1Lizard.value;
        headerChangeAndSelects()
    });
    player2Rock.addEventListener('click', function () {
        player2 = player2Rock.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Paper.addEventListener('click', function () {
        player2 = player2Paper.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Spock.addEventListener('click', function () {
        player2 = player2Spock.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Scissors.addEventListener('click', function () {
        player2 = player2Scissors.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Lizard.addEventListener('click', function () {
        player2 = player2Lizard.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
});
//best of 7 two player--------------------------------------------------------------------------------------------------------------------
best7P.addEventListener('click', function () {
    round = 4;
    player5And7()
    playerSelections();
    playerSlection2();

    player1Rock.addEventListener('click', function () {
        player1 = player1Rock.value;
        headerChangeAndSelects()
    });

    player1Paper.addEventListener('click', function () {
        player1 = player1Paper.value;
        headerChangeAndSelects()
    });

    player1Spock.addEventListener('click', function () {
        player1 = player1Spock.value;
        headerChangeAndSelects()
    });

    player1Scissors.addEventListener('click', function () {
        player1 = player1Scissors.value;
        headerChangeAndSelects()
    });

    player1Lizard.addEventListener('click', function () {
        player1 = player1Lizard.value;
        headerChangeAndSelects()
    });
    player2Rock.addEventListener('click', function () {
        player2 = player2Rock.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Paper.addEventListener('click', function () {
        player2 = player2Paper.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Spock.addEventListener('click', function () {
        player2 = player2Spock.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Scissors.addEventListener('click', function () {
        player2 = player2Scissors.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
    player2Lizard.addEventListener('click', function () {
        player2 = player2Lizard.value;
        player2Select.classList.add('hide');
        playerVsPlayerIf()
    });
});
//Button for computer vs player
nextRoundBtn.addEventListener('click', function () {
    compSelect.classList.remove('hide');
    winnerWinnerChickenDinner.classList.add('hide');
    loserLoserSuckLess.classList.add('hide');
    tie.classList.add('hide');
    nextRoundBtn.classList.add('hide');
    headerText.textContent = 'Now choose your next option';
    headerText2.textContent = '';
    compSelect.classList.remove('hide');
    bestAll.classList.add('hide');
    computerAnswer = RPSLS();
    if (playerWins === round) {
        headerText.textContent = 'CONGRATS YOU WON!';
        headerText2 = '';
        ResetGame.classList.remove('hide');
        compSelect.classList.add('hide');
    }
    else if (computerWins === round) {
        headerText.textContent = 'Damn you lost.'
        headerText2.textContent = 'That\'s not very Awesome Sauce';
        ResetGame.classList.remove('hide');
        compSelect.classList.add('hide');
    }
});
//button for PLayer vs player
nextRoundBtn2.addEventListener('click', function () {
    nextRoundBtn2.classList.add('hide');
    player1Select.classList.remove('hide');
    player2Select.classList.add('hide');
    headerText.textContent = savedName1 + ' next choose your option';
    headerText2.textContent = '';
    bestAllplayer.classList.add('hide');
    tie.classList.add('hide');
    if (player1Wins >= round) {
        headerText.textContent = savedName1.toUpperCase() + '  WON!';
        headerText2 = '';
        ResetGame.classList.remove('hide');
        player1Select.classList.add('hide');
        winnerWinnerChickenDinnerPlayer1.classList.remove('hide');
        scoresPlay.classList.add('hide');
    }
    else if (player2Wins >= round) {
        headerText.textContent = savedName2.toUpperCase() + ' WON!'
        headerText2.textContent = '';
        ResetGame.classList.remove('hide');
        player1Select.classList.add('hide');
        winnerWinnerChickenDinnerPlayer2.classList.remove('hide');
        scoresPlay.classList.add('hide');
    }
});
//function for all the if statements for player vs player
function playerVsPlayerIf() {
    if (player1 === player2) {
        headerText.textContent = 'You Tied!';
        player1Select.classList.add('hide');
        tie.classList.remove('hide');
        nextRoundBtn2.classList.remove('hide');
        play1Score.innerHTML = player1Wins;
        play2Score.innerHTML = player2Wins;
    }
    else if (player1 === 'Rock' && player2 === 'Paper' ||
        player1 === 'Rock' && player2 === 'Spock' ||
        player1 === 'Scissors' && player2 === 'Rock' ||
        player1 === 'Scissors' && player2 === 'Spock' ||
        player1 === 'Paper' && player2 === 'Scissors' ||
        player1 === 'Paper' && player2 === 'Lizard' ||
        player1 === 'Spock' && player2 === 'Paper' ||
        player1 === 'Spock' && player2 === 'Lizard' ||
        player1 === 'Lizard' && player2 === 'Rock' ||
        player1 === 'Lizard' && player2 === 'Scissors') {
        headerText.textContent = savedName2 + ' Gets the point!';
        compSelect.classList.add('hide');

        player2Wins++;
        play1Score.innerHTML = player1Wins;
        play2Score.innerHTML = player2Wins;
        nextRoundBtn2.classList.remove('hide');
    }
    else {
        headerText.textContent = savedName1 + ' Gets the point!';
        compSelect.classList.add('hide');
        player1Wins++;
        play1Score.innerHTML = player1Wins;
        play2Score.innerHTML = player2Wins;
        nextRoundBtn2.classList.remove('hide');
    }
}
//function or 1 round players vs computer
function computerVsPlayer() {
    if (userComputerSelect === computerAnswer) {
        headerText.textContent = 'You Tied!';
        compSelect.classList.add('hide');
        tie.classList.remove('hide');
        ResetGame.classList.remove('hide');
    }
    else if (userComputerSelect === 'Rock' && computerAnswer === 'Paper' ||
        userComputerSelect === 'Rock' && computerAnswer === 'Spock' ||
        userComputerSelect === 'Scissors' && computerAnswer === 'Rock' ||
        userComputerSelect === 'Scissors' && computerAnswer === 'Spock' ||
        userComputerSelect === 'Paper' && computerAnswer === 'Scissors' ||
        userComputerSelect === 'Paper' && computerAnswer === 'Lizard' ||
        userComputerSelect === 'Spock' && computerAnswer === 'Paper' ||
        userComputerSelect === 'Spock' && computerAnswer === 'Lizard' ||
        userComputerSelect === 'Lizard' && computerAnswer === 'Rock' ||
        userComputerSelect === 'Lizard' && computerAnswer === 'Scissors') {
        computerWins++;
        headerText.textContent = 'Computer Wins!';
        compSelect.classList.add('hide');
        loserLoserSuckLess.classList.remove('hide');
        ResetGame.classList.remove('hide');
    }
    else {
        playerWins++;
        headerText.textContent = 'You Win!';
        compSelect.classList.add('hide');
        winnerWinnerChickenDinner.classList.remove('hide');
        ResetGame.classList.remove('hide');
    }
}
//function for rounds 5 and 7 computer vs player
function computerVsPlayer2() {
    if (userComputerSelect === computerAnswer) {
        headerText.textContent = 'You Tied!';
        compSelect.classList.add('hide');
        tie.classList.remove('hide');
        nextRoundBtn.classList.remove('hide');
        computerScore.innerHTML = computerWins;
        userScore.innerHTML = playerWins;
    }
    else if (userComputerSelect === 'Rock' && computerAnswer === 'Paper' ||
        userComputerSelect === 'Rock' && computerAnswer === 'Spock' ||
        userComputerSelect === 'Scissors' && computerAnswer === 'Rock' ||
        userComputerSelect === 'Scissors' && computerAnswer === 'Spock' ||
        userComputerSelect === 'Paper' && computerAnswer === 'Scissors' ||
        userComputerSelect === 'Paper' && computerAnswer === 'Lizard' ||
        userComputerSelect === 'Spock' && computerAnswer === 'Paper' ||
        userComputerSelect === 'Spock' && computerAnswer === 'Lizard' ||
        userComputerSelect === 'Lizard' && computerAnswer === 'Rock' ||
        userComputerSelect === 'Lizard' && computerAnswer === 'Scissors') {
        computerWins++;
        headerText.textContent = 'Computer Gets The Point!';
        compSelect.classList.add('hide');
        loserLoserSuckLess.classList.remove('hide');
        nextRoundBtn.classList.remove('hide');
        computerScore.innerHTML = computerWins;
        userScore.innerHTML = playerWins;
    }
    else {
        playerWins++;
        headerText.textContent = 'You Get The Point!';
        compSelect.classList.add('hide');
        winnerWinnerChickenDinner.classList.remove('hide');
        nextRoundBtn.classList.remove('hide');
        computerScore.innerHTML = computerWins;
        userScore.innerHTML = playerWins;
    }
}
function headerChangeAndSelects() {
    headerText.textContent = savedName2 + ' Now choose your option';
    player1Select.classList.add('hide');
    player2Select.classList.remove('hide');
}
function player5And7() {
    headerText.textContent = savedName1 + ' choose your option';
    headerText2.textContent = '';
    scoresPlay.classList.remove('hide');
    play1Score.innerHTML = player1Wins;
    play2Score.innerHTML = player2Wins;
    playerScoreName1.innerHTML = player1Name.value + ' score:';
    playerScoreName2.innerHTML = Player2Name.value + ' score:';
    player1Select.classList.remove('hide');
    bestAllplayer.classList.add('hide');
}
function computer5And7() {
    headerText.textContent = 'Now choose your option';
    headerText2.textContent = '';
    scores.classList.remove('hide');
    computerScore.innerHTML = computerWins;
    userScore.innerHTML = playerWins;
    compSelect.classList.remove('hide');
    bestAll.classList.add('hide');
}
function startingBtnsFunction() {
    computerBtn.classList.add('hide');
    twoplayerBtn.classList.add('hide');
    selectGame.classList.add('hide');
    computerText.textContent = '';
    twoPlayerText.textContent = '';
    howToPlay.classList.add('hide');
}
function RPSLS() {
    fetch('https://scottsrpsls.azurewebsites.net/api/RockPaperScissors/GetRandomOption').then(
        response => response.text()
    ).then(
        data => {
            computerAnswer = data;
        }
    )
}