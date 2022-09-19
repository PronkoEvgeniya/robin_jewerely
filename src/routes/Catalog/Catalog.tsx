import { Component } from 'react';
import cards from '../../assets/cards.json';
import Sidebar from '../../components/Sidebar/Sidebar';
import { ICard } from '../../types/interfaces';
import './catalog.scss';

export let basketStorage: [ICard];

class Catalog extends Component {
  render() {
    return (
      <>
        <Sidebar />
        <div>
          {cards.map((card) => {
            return (
              <div key={card.name}>
                <div style={{ backgroundImage: 'url(' + card.url + ')' }} />
                <h3>{card.title}</h3>
                <p>
                  Размер: <i>{card.length}</i>
                </p>
                <p>{card.cost} бел. руб.</p>
                <button>В корзину</button>
                <p>{card.description}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default Catalog;
