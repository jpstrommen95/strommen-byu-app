import React from 'react';
import PropTypes from 'prop-types';
import SideNavItem from './side-nav-item';

function SideNavItemList({ pageArray }) {
  return (
    <div className="side-nav-item-list">
      {pageArray.map(({ name, routeTo }) => (
        <SideNavItem
          key={name}
          name={name}
          routeTo={routeTo}
        />
      ))}
    </div>
  );
}

SideNavItemList.propTypes = {
  pageArray: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    routeTo: PropTypes.string,
  })).isRequired,
};

export default SideNavItemList;
