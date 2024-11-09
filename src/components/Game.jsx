import React, {useState} from 'react';
import Board from "./Board";
const Game = () => {
    const initialBoard = new Array(9).fill(null)
    const [board, setBoard] = useState(initialBoard)
    const [nextPlayer, setNextPlayer] = useState('X')

    const handleMove = (index) => {
      const newBoard =   board.map((square, ind) => (index === ind ? nextPlayer : square))
        setNextPlayer (
            nextPlayer === 'X' ? 'O' : 'X'

        )
        setBoard(newBoard)

    }
    return (
        <div>
<Board board={board}
 handleMove = {handleMove}
/>

            <div>Next Player:{nextPlayer}</div>
        </div>
    );
};

export default Game;
