import { Component } from 'react';
import Banner from '../../components/Banner/Banner';
import { NavLink } from 'react-router-dom';
import './mainPage.scss';

class MainPage extends Component {
  render() {
    return (
      <>
        <Banner />
        <div>
          <div>
            <h2>О нас</h2>
            <p>
              Robin Jewelry - это маленькая частица природы, бережно сохраненная в эпоксидной смоле.
              Все украшения Robin Jewelry - ручная работа, поэтому каждое кольцо, серьги или кулон -
              уникальны.
            </p>
          </div>
          <div>
            <h2>Состав</h2>
            <p>
              Основа украшений - эпоксидная смола. Фурнитура выполнена из цинкового сплава. Для
              создания композиций украшений могут быть использованы цветы или частицы цветов,
              листья, грибы, мох, камни или ракушки.
            </p>
          </div>
          <div>
            <h2>Индивидуальный заказ</h2>
            <p>
              Можно заказать авторское украшение, для этого нужно оговорить детали с мастером,
              написав в директ или личные сообщения в предпочитаемой социальной сети.
            </p>
          </div>
          <NavLink to={'/catalog'}>
            <button>Перейти к покупкам</button>
          </NavLink>
        </div>
      </>
    );
  }
}

export default MainPage;
