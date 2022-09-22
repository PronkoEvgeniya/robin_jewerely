import { Component } from 'react';
import './sidebar.scss';

class Sidebar extends Component {
  render() {
    return (
      <aside>
        <form className="sidebar__container">
          <input
            type="search"
            name="search-input"
            id="search-input"
            autoFocus
            placeholder="Поиск..."
          />
          <div className="sidebar__sort">
            <select>
              <option value="Сортировать по цене">Сортировать по цене</option>
              <option value="По возрастанию">По возрастанию</option>
              <option value="По убыванию">По убыванию</option>
            </select>
            <select>
              <option value="Сортировать по цене">Сортировать по названию</option>
              <option value="По возрастанию">А-Я</option>
              <option value="По убыванию">Я-А</option>
            </select>
          </div>
          <div className="sidebar__filters-color">
            <h2>Цвет фурнитуры:</h2>
            <input type="checkbox" name="1" id="colorGold" />
            <label htmlFor="colorGold">Серебристый</label>
            <input type="checkbox" name="2" id="colorSilver" />
            <label htmlFor="colorSilver">Золотистый</label>
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
        </form>
      </aside>
    );
  }
}

export default Sidebar;
