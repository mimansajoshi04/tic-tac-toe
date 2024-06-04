var n = 0;
var total = max * max;
var max = parseInt("{{n}}");

console.log(max);



var matrix = []
// function to initialize the matrix
function initializeMatrix() {
    for (let i = 0; i < max; i++) {
        let row = [];
        for (let j = 0; j < max; j++) {
            row.push(-1);
        }
        matrix.push(row);
    }
}

function changeMatrixEntry(entry) {
    let row = parseInt(entry[0]);
    let col = parseInt(entry[1]);
    matrix[row][col] = n % 2;
}

// checks if the entry gives any winner
function checkWinner(entry) {
    let row = parseInt(entry[0]);
    let col = parseInt(entry[1]);
    if (row == col || row + col + 1 == max) {
        let i = 0;
        while (i < max) {
            if (matrix[i][i] != matrix[row][col]) {
                break;
            }
            i++;
        }
        if (i == max) {
            return true;
        }

        let j = 0
        while (j < max) {
            if (matrix[row][col] != matrix[j][max - 1 - j]) {
                break;
            }
            j++;
        }
        if (j == max) {
            return true;
        }
    }

    let i = 0;
    while (i < max) {
        if (matrix[row][col] != matrix[i][col]) {
            break;
        }
        i++;
    }
    if (i == max) {
        return true;
    }

    let j = 0;

    while (j < max) {
        if (matrix[row][col] != matrix[row][j]) {
            break;
        }
        j++;
    }

    if (j == max) {
        return true;
    }

    return false;

}


// this is a event listener which checks the clicks and changes the click color accordingly
document.addEventListener('click', function (event) {
    let eventID = event.target.id

    console.log(eventID);
    if (eventID.toString() != "start-button" && eventID.toString() != "end-button") {
        btn = document.getElementById(eventID);
        btn.disabled = true;
        changeButtonColor(eventID.toString(), n);

        
        changeMatrixEntry(eventID);
        console.log(matrix);

        n = n + 1;
        console.log("plays: " + n);

        console.log(2 * (max) - 1);


        if ((n > 2 * (max) - 1 || n == 2 * max - 1) && n - 1 < total) {
            let result = checkWinner(eventID);
            if (result) {
                console.log("Our winner is: Player " + n % 2)
                if (n % 2 == 0) {
                    results(2);
                }
                else {
                    results(1);
                }
            }
        }

        if (n == total) {
            console.log("Tie!")
            results(0);
        }

    }
});

// this event listener will help to give a alert box to start the game by clicking on start
document.addEventListener('DOMContentLoaded', function () {
    alert('Click on start to begin to play!');
});


// this function is called via the start button and starts the game, enables the tictactoe boxes and also enables the end game button and disables the start game button.
function startGame() {

    //enables tictactoe boxes
    for (let i = 0; i < max; i++) {
        for (let j = 0; j < max; j++) {
            console.log(i);
            console.log(j);
            let btn = document.getElementById(i.toString() + j.toString());
            btn.disabled = false;
        }
    }
    // disables the start button
    let btn = document.getElementById("start-button");
    btn.style.backgroundColor = 'rgba(182, 11, 11, 0.493)';
    btn.disabled = true;
    btn.style.opacity = '0.5';

    // enables the end button
    btn = document.getElementById("end-button");
    btn.style.visibility = 'visible';
    btn.style.backgroundColor = 'rgb(11, 182, 42)';
    btn.style.opacity='1';
    btn.disabled = false;

    // initializes the game matrix
    initializeMatrix();
}

// enables the start button and disables the end button
function endGame() {
    window.location.href = "/game";
}

function newGame(){
    window.location.href='/';
}

// this function changes the buttons color according to the player's turn
function changeButtonColor(id, n) {

    var button = document.getElementById(id);

    // for player 2 turn
    if (n % 2 == 1) {
        //button.innerHTML = "X"
        button.style.backgroundColor ="{{p2c}}";
        button.style.color = 'white';
    }
    // for player 1 turn
    else {
        //button.innerHTML = "O"
        button.style.backgroundColor = "{{p1c}}";
        button.style.color = 'white';
    }
}

function results(winner) {
    window.location.href = '/results?winner=' + winner.toString();
}