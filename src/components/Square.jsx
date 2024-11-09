import React from 'react';
const style = {
    backGround: '#e8fcfc',
    border:'2px solid teal',
    borderRadius: '10px',
    fontSize: '50 px',
    fontWeight: '800',
    cursor:'pointer'
}
const Square = ({square, index, handleMove}) => {
    return (
        <button style={style} onClick = {() => handleMove(index)}>
            {square}

        </button>
    );
};

export default Square;
