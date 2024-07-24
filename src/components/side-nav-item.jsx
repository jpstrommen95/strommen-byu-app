import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SideNavItem({ name, routeTo }) {
  return (
    <Link to={routeTo}>
      <div className="side-nav-item">
        <h1
          className="label-1 side-nav-item-name"
        >
          {name}
        </h1>
      </div>
    </Link>
  );
}

SideNavItem.propTypes = {
  name: PropTypes.string.isRequired,
  routeTo: PropTypes.string.isRequired,
};

export default SideNavItem;
