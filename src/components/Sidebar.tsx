import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__search">
          <input
            type="search"
            name="search-input"
            id="search-input"
            autoFocus
            placeholder="Поиск..."
          />
        </div>
        <div className="sidebar__sort">
          <button className="btn__sort-price">По возрастанию цены</button>
          <button className="btn__sort-abc">По названию</button>
        </div>
        <div className="sidebar__filters">
          <div className="filters__color">
            <h2>Выбрать цвет:</h2>
            <input type="checkbox" name="1" id="colorBrown" />
            <label htmlFor="colorBrown"></label>
            <input type="checkbox" name="2" id="colorYellow" />
            <label htmlFor="colorYellow"></label>
            <input type="checkbox" name="3" id="colorPurple" />
            <label htmlFor="colorPurple"></label>
            <input type="checkbox" name="4" id="colorWhite" />
            <label htmlFor="colorWhite"></label>
            <input type="checkbox" name="5" id="colorBlue" />
            <label htmlFor="colorBlue"></label>
          </div>
          <div className="filters__colorFNT">
            <h2>Выбрать цвет фурнитуры:</h2>
            <input type="checkbox" name="1" id="colorGold" />
            <label htmlFor="colorGold"></label>
            <input type="checkbox" name="2" id="colorSilver" />
            <label htmlFor="colorSilver"></label>
          </div>
          <div className="filters__type">
            <h2>Выбрать тип изделия:</h2>
            <input type="checkbox" name="1" id="chains" />
            <label htmlFor="chains">Кулон</label>
            <input type="checkbox" name="2" id="earrings" />
            <label htmlFor="earrings">Серьги</label>
            <input type="checkbox" name="3" id="rings" />
            <label htmlFor="rings">Кольцо</label>
          </div>
        </div>
        <div className="sidebar__sliders"></div>
        <div className="sidebar__buttons">
          <button className="btn__btns-filters">Сброс фильтров</button>
          <button className="btn__btns-settings">Сброс всех настроек</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
