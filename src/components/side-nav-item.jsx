import React from 'react';
import PropTypes from 'prop-types';

function SideNavItem({ name }) {
  return (
    <div className="side-nav-item">
      <h1
        className="label-1 side-nav-item-name"
        key={name}
      >
        {name}
      </h1>
    </div>
  );
}

SideNavItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SideNavItem;
