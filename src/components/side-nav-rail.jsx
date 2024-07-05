import React from 'react';
import PropTypes from 'prop-types';

function SideNavRail({ pageArray }) {
  return (
    <div>
      {pageArray.map(({ name }) => <h1 key={name}>{name}</h1>)}
    </div>
  );
}

SideNavRail.propTypes = {
  pageArray: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
  })).isRequired,
};

export default SideNavRail;
