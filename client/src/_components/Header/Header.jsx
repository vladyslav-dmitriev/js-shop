import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../_shared/Logo';
import Search from './Search';

const Header = () => (
  <header className="header">
    <div className="container">
      <div className="header__container">
        <Link to="/">
          <Logo />
        </Link>
        <Search />
      </div>
    </div>
  </header>
);

export default Header;
