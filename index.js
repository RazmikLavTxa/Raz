let stringifyBoard = function(){
     return(board[0].join('') +
    '\n' +
board[1].join('')+
'\n' + 
board[2].join (''))
}

let didWine = function(board, player){
    //rows
    if(board[0][0] == player && board [0][1] == player && [0][2] == player){
        return true;
    }

    if(board[1][0] == player && board [1][1] == player && [1][2] == player){
        return true;
    }

    if(board[2][0] == player && board [2][1] == player && [2][2] == player){
        return true;
    }

    //columns
    if(board[0][0] == player && board [1][0] == player && [2][0] == player){
        return true;
    }

    if(board[0][1] == player && board [1][1] == player && [2][1] == player){
        return true;
    }

    if(board[0][2] == player && board [1][2] == player && [2][2] == player){
        return true;
    }

    //diagonals

    if(board[0][0] == player && board [1][1] == player && [2][2] == player){
        return true;
    }

    if(board[2][0] == player && board [1][1] == player && [0][2] == player){
        return true;
    }
    
    return false
}

let isFull = function(board){
    let i = 0;
    while(i<board.length){
        const row = board[i];
        let i2 = 0;
        while(i2 < row.length){
            if(row[i2] == '-'){
                return false
            }
            i2 = i2 + 1
        }
        i = i+1
    }
    return true
}

let board = [
    ['-','-','-'],
    ['-','-','-'],
    ['-','-','-']
]
let player = 'x';

while(true){
    let boardStr = stringifyBoard(board);


    let row = +prompt("row \n\n\n" + boardStr);
    let column = +prompt("column \n\n\n" + boardStr);

    if(board[row][column] !== '-'){
        alert('tie');
        break;
    
    }

    board[row][column] = player

    let win = didWine(board,player);
    if(win){
        alert ('WIN');
        break;
    }

    if(isFull(board)){
        alert('game over');
        break;
    }

    if(player == 'x'){
        player = 'o'
    }else player = 'x'
    
    
}
