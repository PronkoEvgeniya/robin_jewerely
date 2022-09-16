import React, { Component } from 'react';
import cards from '../assets/cards.json';
import Sidebar from '../components/Sidebar';
import { ICard } from '../types/interfaces';

export let basketStorage: [ICard];

class Catalog extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div className="cards-field">
          {cards.map((card) => {
            return (
              <div className="card-item" key={card.name}>
                <div className="card-image" style={{ backgroundImage: 'url(' + card.url + ')' }} />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-size">
                  Размер: <i>{card.length}</i>
                </p>
                <p className="card-price">{card.cost} бел. руб.</p>
                <button className="card-btn">В корзину</button>
                <p className="card-description">{card.description}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Catalog;
