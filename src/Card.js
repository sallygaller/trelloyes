// When the "delete card" button is clicked on any card, remove all references to that card from state.
// When the "add random card" button is clicked, generate a random card and add it to the state and the appropriate list.
// In the resources below, we've supplied you with a function for generating a random card.

import React from 'react';
import './Card.css';

export default function Card(props) {
    return (
        <div className='Card'>
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button
                onClick={ () => props.onDeleteCard(props.id)}
                type='button'>
                Delete card
            </button>
        </div>
    )
}

Card.propTypes = {
    onClickDelete: () => {}
}