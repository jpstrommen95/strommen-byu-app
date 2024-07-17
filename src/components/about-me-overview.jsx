import React from 'react';
import CryptoJS from 'crypto-js';
import assetText from '../text/about-me.json';
import SharedHeading from './shared-heading';

function AboutMeOverview() {
  const pComponents = assetText.map((content) => {
    const hash = CryptoJS.MD5(content).toString();
    return (
      <p key={hash} className="paragraph-1">{content}</p>
    );
  });

  return (
    <div className="about-me-full">
      <SharedHeading
        containerClass="shared-heading"
        name="Overview"
        typographyClasses={['heading-1', 'black-and-white-black-text']}
      />
      <div className="about-me-overview">
        {pComponents}
      </div>
    </div>
  );
}

export default AboutMeOverview;
