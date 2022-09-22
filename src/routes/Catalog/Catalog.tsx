import { Component } from 'react';
import cards from '../../assets/cards.json';
import Sidebar from '../../components/Sidebar/Sidebar';
import './catalog.scss';
import './cardContainer.scss';

class Catalog extends Component {
  render() {
    return (
      <div className="catalog__container">
        <Sidebar />
        <div className="card__container">
          {cards.map((card) => {
            return (
              <div key={card.name}>
                <div style={{ backgroundImage: `url(${card.url})` }} />
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
      </div>
    );
  }
}

export default Catalog;
