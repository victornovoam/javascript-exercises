// Make your changes to store and update game state in this file

// Take the row and column number between 0 and 2 
// (inclusive) and update the game state.

let board = [[null, null, null], 
            [null, null, null], 
            [null, null, null]];

let count = 0;
let nought = "nought";
let cross = "cross"
function takeTurn(row, column) {
    console.log("takeTurn was called with row: "+row+", column:"+column);
    if(board[row][column] == null){
        if(count %2 !== 0){
            board[row][column] = nought;
            count ++;
        } else if (count %2 == 0){
            board[row][column] = cross
            count ++;
        }
    }else{
        alert("Illegal move buddy")
    }
return board
}

// Return either "noughts", "crosses" or "nobody" if the game is over.
// Otherwise return null to continue playing.
function checkWinner() {
    console.log("checkWinner was called");
    //  diagonal winning condition
    if (board[0][0] == "nought" && board[1][1] == "nought" && board[2][2] == "nought"){
        return "noughts"

    }else if (board[2][0] == "nought" && board[1][1] == "nought" && board[0][2] == "nought"){
        return "noughts"

    }else if (board[0][0] == "cross" && board[1][1] == "cross" && board[2][2] == "cross"){
        return "cross"

    }else if (board[2][0] == "cross" && board[1][1] == "cross" && board[0][2] == "cross"){
        return "crosses"
    }

    // row winning condition
    noughtCount = 0;
    crossCount = 0;
    for(let i = 0; i < board.length; i++){
        for(let j = 0; j < board[i].length; j++){
            if(board[i][j] == "nought"){
                noughtCount += 1;
            } else if(board[i][j] == "cross"){
                crossCount += 1;
            }
            if (noughtCount == 3){
                return "noughts"
            } else if (crossCount ==3){
                return "crosses"
            }
        }
        noughtCount = 0;
        crossCount = 0;
    }

    //column winning
    for (let i = 0; i < 3; i++) {
        for(let f = 0; f < 3; f++){
            if(board[f][i] == "nought"){
                noughtCount += 1;
            } else if(board[f][i] == "cross"){
                crossCount += 1;
            }
            if (noughtCount == 3){
                return "noughts"
            } else if (crossCount ==3){
                return "crosses"
            }  
        }
        noughtCount = 0;
        crossCount = 0;
      }
      if(count == 9){
        return "nobody"
      }

}

// Set the game state back to its original state to play another game.
function resetGame() {
    console.log("resetGame was called");
    let count = 0;
    board = [[null, null, null], 
            [null, null, null], 
            [null, null, null]];
    return board

}

// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}


// Return the current board state with either a "nought" or a "cross" in
// each position. Put a null in a position that hasn't been played yet.
function getBoard() {
    console.log("getBoard was called");
    return board;
}

if (typeof exports === 'object') {
    console.log("Running in Node")
    // Node. Does not work with strict CommonJS, but only CommonJS-like 
    // environments that support module.exports, like Node.
    module.exports = {
        takeTurn,
        checkWinner,
        resetGame,
        getBoard,
    }
} else {
    console.log("Running in Browser")
}
