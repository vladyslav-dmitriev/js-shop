import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__copyright">
        {'© '}
        {new Date().getFullYear()}
        <a
          className="footer__author"
          href="//linkedin.com/in/vladyslav-dmitriev"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'Vladyslav Dmitriev'}
        </a>
        {' |'}
        <a
          className="footer__author"
          href="//github.com/vladyslav-dmitriev/react-shop"
          target="_blank"
          rel="noopener noreferrer"
        >
          {'Github'}
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
