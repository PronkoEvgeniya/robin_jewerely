import { Component } from 'react';
import './banner.scss';
import bg from '../../assets/images/forestBG.jpg';

class Banner extends Component {
  render() {
    return (
      <div className="banner__container" style={{ backgroundImage: `url(${bg})` }}>
        <h1>Robin Jewelry</h1>
        <h2>Украшения ручной работы из эпоксидной смолы</h2>
      </div>
    );
  }
}

export default Banner;
