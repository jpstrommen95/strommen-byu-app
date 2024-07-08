import React from 'react';
import PropTypes from 'prop-types';
import SideNavItemList from './side-nav-item-list';

function SideNavRail({ pageArray }) {
  return (
    <div className="side-nav-rail">
      <SideNavItemList
        pageArray={pageArray}
      />
    </div>
  );
}

SideNavRail.propTypes = {
  pageArray: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    routeTo: PropTypes.string,
  })).isRequired,
};

export default SideNavRail;
