import React from 'react';
import Square from "./Square";
const style = {
border:'4px solid teal',
borderRadius: '10px',
width: '300px',
height: '300px',
display: 'grid',
gridTemplate:'repeat(3, 1fr) / repeat(3, 1fr)',
margin: 'auto'

}

const Board = ({board, handleMove}) => {
    return (
        <div style={style}>
            {board.map((square, index) => (
                <Square square = {square} index = {index} key = {index} handleMove = {handleMove}/>))}

        </div>
    );
};

export default Board;
