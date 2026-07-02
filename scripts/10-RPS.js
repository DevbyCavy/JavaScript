let record = JSON.parse(localStorage.getItem('record')) || {
    wins: 0,
    loses: 0,
    draws: 0
};   

updateRecordElement();
/*
if (record === null) {
    record = {
        wins: 0,
        loses: 0,
        draws: 0
    };       
}
*/

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'scissors'){
        if (computerMove === 'rock'){
            result = 'You Lose';
        }else if(computerMove === 'paper'){
            result = 'You Win';
        }else if(computerMove === 'scissors'){
            result = 'Tie';
        }

    } else if (playerMove === 'paper'){
        if (computerMove === 'rock'){
            result = 'You Win';
        }else if(computerMove === 'paper'){
            result = 'Tie';
        }else if(computerMove === 'scissors'){
            result = 'You Lose';
        }

    } else if (playerMove === 'rock'){
        if (computerMove === 'rock'){
            result = 'Tie';
        }else if(computerMove === 'paper'){
            result = 'You Win';
        }else if(computerMove === 'scissors'){
            result = 'You Lose';
        }
    }

    if (result === 'You Win'){
        record.wins += 1;
    }else if (result === 'You Lose'){
        record.loses += 1;
    }else if (result === 'Tie'){
        record.draws += 1;
    }

    localStorage.setItem('record', JSON.stringify(record));

    updateRecordElement();

    document.querySelector('.js-result')
    .innerHTML = (`${result}`);

    document.querySelector('.js-moves')
    .innerHTML = `You
    <img src="images/${playerMove}-emoji.png">
    <img src="images/${computerMove}-emoji.png">
    Computer`;

}

function updateRecordElement(){
    document.querySelector('.js-record')
        .innerHTML = `Wins: ${record.wins}, Loses: ${record.loses}, Draw: ${record.draws}`;
}

function pickComputerMove(){

    let randomNumber = Math.random();

    let computerMove = '';


    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    }
    else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }

    return computerMove;
}