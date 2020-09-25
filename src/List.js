// When the "delete card" button is clicked on any card, remove all references to that card from state.
// When the "add random card" button is clicked, generate a random card and add it to the state and the appropriate list.
// In the resources below, we've supplied you with a function for generating a random card.
import React from 'react';
import Card from './Card'
import './List.css';

export default function List(props) {
    const cards = Array.from(props.cards);
    console.log(cards)
    return (
        <section className='List'>
            <header>
                <h2>{props.header}</h2>
                <button
                    onClick={ () => props.onAddCard(props.id)}
                    type='button'>
                    Add random card
                </button>
            </header>
            <div className='List-cards'>
                {cards.map((card =>
                    <Card
                        //props for Cards component
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        content={card.content}
                        onDeleteCard={props.onDeleteCard}
                    />
                ))}
            </div>
        </section>
    )
}

List.defaultProps = {
    onClickAdd: () => {}
}