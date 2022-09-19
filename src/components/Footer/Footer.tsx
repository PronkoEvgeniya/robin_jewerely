import React, { Component } from 'react';
import { IconGh, IconIg, IconVk } from '../../assets/icons.sprite';
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <footer>
        <ul>
          <li>
            <a href="https://github.com/PronkoEvgeniya">
              <span>Разработано</span>
              {IconGh()}
            </a>
          </li>
          <li>2022</li>
          <li>
            <a href="https://www.instagram.com/robin____jewelry/">{IconIg()}</a>
          </li>
          <li>
            <a href="https://vk.com/robin_jewelry">{IconVk()}</a>
          </li>
        </ul>
      </footer>
    );
  }
}

export default Footer;
