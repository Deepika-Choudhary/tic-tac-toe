console.log("let's start")

// var flag=1;
function logic() {
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById('b1').value;
    b2 = document.getElementById('b2').value;
    b3 = document.getElementById('b3').value;
    b4 = document.getElementById('b4').value;
    b5 = document.getElementById('b5').value;
    b6 = document.getElementById('b6').value;
    b7 = document.getElementById('b7').value;
    b8 = document.getElementById('b8').value;
    b9 = document.getElementById('b9').value;


    //Player 1 conditions for winning
    if ((b1 == 'X' || b1 == 'x') && (b2 == 'X' || b2 == 'x') && (b3 == 'X' || b3 == 'x')) {
        document.getElementById('result').innerHTML = 'Player X won';
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;

    }
    else if ((b4 == 'X' || b4 == 'x') && (b5 == 'X' || b5 == 'x') && (b6 == 'X' || b6 == 'x')) {
        document.getElementById('result').innerHTML = 'Player X won';
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
    }
    else if ((b7 == 'X' || b7 == 'x') && (b8 == 'X' || b8 == 'x') && (b9 == 'X' || b9 == 'x')) {
        document.getElementById('result').innerHTML = 'Player X won';
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
    }
    else if ((b1 == 'X' || b1 == 'x') && (b4 == 'X' || b4 == 'x') && (b7 == 'X' || b7 == 'x')) {
        document.getElementById('result').innerHTML = 'Player X won';
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
    }
    else if ((b2 == 'X' || b2 == 'x') && (b5 == 'X' || b5 == 'x') && (b8 == 'X' || b8 == 'x')) {
        document.getElementById('result').innerHTML = 'Player X won';
        document.getElementById('b1').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b9').disabled = true;
    }
    else if ((b3 == 'X' || b3 == 'x') && (b6 == 'X' || b6 == 'x') && (b9 == 'X' || b9 == 'x')) {
        document.getElementById('result').innerHTML = 'Player X won';
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
    }
    else if ((b1 == 'X' || b1 == 'x') && (b5 == 'X' || b5 == 'x') && (b9 == 'X' || b9 == 'x')) {
        document.getElementById('result').innerHTML = 'Player X won';
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
    }
    else if ((b3 == 'X' || b3 == 'x') && (b5 == 'X' || b5 == 'x') && (b7 == 'X' || b7 == 'x')) {
        document.getElementById('result').innerHTML = 'Player X won';
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
    }

    //Player 2 conditions for winning
    else if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == 'O')) {
        document.getElementById('result').innerHTML = 'Player O won';
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;

    }
    else if ((b4 == 'o' || b4 == 'O') && (b5 == 'o' || b5 == 'O') && (b6 == 'o' || b6 == 'O')) {
        document.getElementById('result').innerHTML = 'Player O won';
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
    }
    else if ((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById('result').innerHTML = 'Player O won';
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
    }
    else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')) {
        document.getElementById('result').innerHTML = 'Player O won';
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
    }
    else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O')) {
        document.getElementById('result').innerHTML = 'Player O won';
        document.getElementById('b1').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b9').disabled = true;
    }
    else if ((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById('result').innerHTML = 'Player O won';
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b5').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
    }
    else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O')) {
        document.getElementById('result').innerHTML = 'Player O won';
        document.getElementById('b2').disabled = true;
        document.getElementById('b3').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b7').disabled = true;
        document.getElementById('b8').disabled = true;
    }
    else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O')) {
        document.getElementById('result').innerHTML = 'Player O won';
        document.getElementById('b1').disabled = true;
        document.getElementById('b2').disabled = true;
        document.getElementById('b4').disabled = true;
        document.getElementById('b6').disabled = true;
        document.getElementById('b8').disabled = true;
        document.getElementById('b9').disabled = true;
    }

    //tie -- doubt
    // else{
    //     document.getElementById('result').innerHTML = 'There\'s a TIE'; 
    // }
    else if ((b1 == 'X' || b1 == '0') && (b2 == 'X'
        || b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('result')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
    }

    //calculating which player's turn 
    else {
        if (flag == 1) {
            document.getElementById('result').innerHTML = 'Player X turn';
        }
        else {
            document.getElementById('result').innerHTML = 'Player O turn';
        }
    }
}

//reset button

function reset() {
    location.reload();
    document.getElementById('b1').value = '';
    document.getElementById('b2').value = '';
    document.getElementById('b3').value = '';
    document.getElementById('b4').value = '';
    document.getElementById('b5').value = '';
    document.getElementById('b6').value = '';
    document.getElementById('b7').value = '';
    document.getElementById('b8').value = '';
    document.getElementById('b9').value = '';
}

var flag = 1;
function turn1() {
    if (flag == 1) {
        document.getElementById('b1').value = 'X';
        document.getElementById('b1').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b1').value = 'O';
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}

function turn2() {
    if (flag == 1) {
        document.getElementById('b2').value = 'X';
        document.getElementById('b2').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b2').value = 'O';
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}

function turn3() {
    if (flag == 1) {
        document.getElementById('b3').value = 'X';
        document.getElementById('b3').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b3').value = 'O';
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}

function turn4() {
    if (flag == 1) {
        document.getElementById('b4').value = 'X';
        document.getElementById('b4').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b4').value = 'O';
        document.getElementById('b4').disabled = true;
        flag = 1;
    }
}

function turn5() {
    if (flag == 1) {
        document.getElementById('b5').value = 'X';
        document.getElementById('b5').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b5').value = 'O';
        document.getElementById('b5').disabled = true;
        flag = 1;
    }
}

function turn6() {
    if (flag == 1) {
        document.getElementById('b6').value = 'X';
        document.getElementById('b6').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b6').value = 'O';
        document.getElementById('b6').disabled = true;
        flag = 1;
    }
}

function turn7() {
    if (flag == 1) {
        document.getElementById('b7').value = 'X';
        document.getElementById('b7').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b7').value = 'O';
        document.getElementById('b7').disabled = true;
        flag = 1;
    }
}

function turn8() {
    if (flag == 1) {
        document.getElementById('b8').value = 'X';
        document.getElementById('b8').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b8').value = 'O';
        document.getElementById('b8').disabled = true;
        flag = 1;
    }
}

function turn9() {
    if (flag == 1) {
        document.getElementById('b9').value = 'X';
        document.getElementById('b9').disabled = true;
        flag = 0;
    }
    else {
        document.getElementById('b9').value = 'O';
        document.getElementById('b9').disabled = true;
        flag = 1;
    }
}
