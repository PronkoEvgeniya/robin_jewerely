import { Component } from 'react';
import './sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <div className="sidebar__container">
          <input
            type="search"
            name="search-input"
            id="search-input"
            autoFocus
            placeholder="Поиск..."
          />
          <div className="sidebar__sort">
            <button className="btn__sort-price">По возрастанию цены</button>
            <button className="btn__sort-abc">По названию</button>
          </div>
          <div className="sidebar__filters-color">
            <h2>Цвет фурнитуры:</h2>
            <input type="checkbox" name="1" id="colorGold" />
            <label htmlFor="colorGold"></label>
            <input type="checkbox" name="2" id="colorSilver" />
            <label htmlFor="colorSilver"></label>
          </div>
          <div className="sidebar__filters-type">
            <h2>Тип изделия:</h2>
            <input type="checkbox" name="1" id="chains" />
            <label htmlFor="chains">Кулон</label>
            <input type="checkbox" name="2" id="earrings" />
            <label htmlFor="earrings">Серьги</label>
            <input type="checkbox" name="3" id="rings" />
            <label htmlFor="rings">Кольцо</label>
          </div>
          <button className="sidebar__btn-trash">Сброс фильтров</button>
        </div>
      </aside>
    );
  }
}

export default Sidebar;
