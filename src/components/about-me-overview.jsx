import React from 'react';
import CryptoJS from 'crypto-js';
import assetText from '../text/about-me.json';

function AboutMeOverview() {
  const pComponents = assetText.map((content) => {
    const hash = CryptoJS.MD5(content).toString();
    return (
      <p key={hash} className="paragraph-1">{content}</p>
    );
  });

  return (
    <div className="about-me-overview">
      {pComponents}
    </div>
  );
}

export default AboutMeOverview;
