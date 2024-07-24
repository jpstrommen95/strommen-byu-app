import React from 'react';
import PropTypes from 'prop-types';
import SideNavRail from './side-nav-rail';

function NavContentBody({ component, pageArray }) {
  return (
    <div className="nav-content-body">
      <SideNavRail pageArray={pageArray} />
      {component}
    </div>
  );
}

NavContentBody.propTypes = {
  component: PropTypes.shape({}).isRequired,
  pageArray: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    routeTo: PropTypes.string,
  })).isRequired,
};

export default NavContentBody;
