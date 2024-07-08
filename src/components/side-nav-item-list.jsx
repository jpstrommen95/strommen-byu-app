import React from 'react';
import PropTypes from 'prop-types';
import SideNavItem from './side-nav-item';

function SideNavItemList({ pageArray }) {
  return (
    <div className="side-nav-item-list">
      {pageArray.map(({ name }) => (
        <SideNavItem
          name={name}
          key={name}
        />
      ))}
    </div>
  );
}

SideNavItemList.propTypes = {
  pageArray: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default SideNavItemList;
