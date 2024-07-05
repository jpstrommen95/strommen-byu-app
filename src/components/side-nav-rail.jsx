import React from 'react';
import PropTypes from 'prop-types';

function SideNavRail({ pageArray }) {
  return (
    <div className="side-nav-rail">
      {pageArray.map(({ name }) => (
        <h1
          className="label-1 side-nav-rail-name"
          key={name}
        >
          {name}
        </h1>
      ))}
    </div>
  );
}

SideNavRail.propTypes = {
  pageArray: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default SideNavRail;
