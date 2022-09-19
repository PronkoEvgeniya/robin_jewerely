import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { IconBascket } from '../../assets/icons.sprite';
import logo from '../../assets/images/logoRJ.png';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <NavLink to={'/'}>
            <img src={logo} alt="logo" />
          </NavLink>
          <NavLink to={'/catalog'}>
            <span>Каталог</span>
          </NavLink>
          <NavLink to={'/shop'}>
            {IconBascket()}
            <span className="shopCounter">0</span>
          </NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
