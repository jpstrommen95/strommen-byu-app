import React from 'react';

function TopMenu() {
  return (
    <div className="top-menu">
      <h1 className="top-menu-name display-1">
        StrommenByu.com
      </h1>
      <a
        className="link label-2"
        href="mailto:strommen-byu-contact-me@justin.strommen.us"
        target="_blank"
        rel="noopener noreferrer"
      >
        Message Me
      </a>
      <a
        className="link label-2"
        href="https://www.linkedin.com/in/justin-strommen-7563ba74"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <a
        className="link label-2"
        href="https://docs.google.com/document/d/1gdMGqxt4xQ2wO9bin61Q3-OdAIHB0B-3zxw3-rifxn0/edit?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        Career CV
      </a>
    </div>
  );
}

export default TopMenu;
