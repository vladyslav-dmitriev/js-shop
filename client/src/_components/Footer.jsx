import React from 'react';

const Footer = () => {
  const links = [
    { href: '//linkedin.com/in/vladyslav-dmitriev', text: 'Vladyslav Dmitriev' },
    { href: '//github.com/vladyslav-dmitriev/js-shop', text: 'Github' },
  ];
  const renderLink = ({ href, text }) => (<a
    className="footer__author"
    href={href}
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </a>);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__copyright">
          {`© ${new Date().getFullYear()}`}
          {links.map(link => renderLink(link))}
        </div>
      </div>
    </footer>
  )
};

export default Footer;
