import React from 'react';

const Card = ({ battleTag, lvRange, type, characterClass, dungeon }) => {
    return (
        <div className='content-center bg-stone-400 inline-grid border p-3 m-2'>
            <div>
                <h2>{battleTag}</h2>
                <p>{lvRange}</p>
                <p>{type}</p>
                <p>{characterClass}</p>
                <p>{dungeon}</p>
            </div>
        </div>
    );
}

export default Card;