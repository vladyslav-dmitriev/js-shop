import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <main className="main">
    <div className="container">
      <div className="not-found__container">
        <div className="not-found__code">404</div>
        <div className="not-found__title">Ошибка</div>
        <div className="not-found__message">Такой страницы не существует</div>
        <Link className="not-found__link" to="/">Вернуться на главную</Link>
      </div>
    </div>
  </main>
);

export default NotFound;
