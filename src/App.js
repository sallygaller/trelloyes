// When the "delete card" button is clicked on any card, remove all references to that card from state.
// When the "add random card" button is clicked, generate a random card and add it to the state and the appropriate list.
// In the resources below, we've supplied you with a function for generating a random card.
import React, { Component } from 'react';
import List from './List'
import './App.css';
import STORE from './store';

const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce(
    (newObj, [key, value]) =>
      key === keyToOmit ? newObj : { ...newObj, [key]: value },
    {}
  );
}

class App extends Component {
  state = {
    store: STORE,
  };


  handleAddCard = (listId) => {
    const newCard = newRandomCard()

    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        return {
          ...list,
          cardIds: [...list.cardIds, newCard.id]
        };
      }
      return list;
    })
    this.setState({
      store: {
        lists: newLists,
        allCards: {
          ...this.state.store.allCards,
          [newCard.id]: newCard
        }
      }
    })
  }

  handleDeleteCard = (cardId) => {
    console.log("someone wants to delete a caard", {cardId})
    const { lists, allCards } = this.state.store;
    const newLists = lists.map(list => ({
      ...list,
      cardIds: list.cardIds.filter(id => id !== cardId)
    }));
    const newCards = omit(allCards, cardId);
    this.setState({
      store: {
        lists: newLists,
        allCards: newCards
      }
    })
  };


  render() {
    const { store } = this.state
    return (
      <main className='App'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            //map lists from store to List component
            <List
              key={list.id}
              id={list.id}
              header={list.header}
              onAddCard={this.handleAddCard}
              //map ids in cardIds to the ids in the allCards element 
              cards={list.cardIds.map(id => store.allCards[id])}
              onDeleteCard={this.handleDeleteCard}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
