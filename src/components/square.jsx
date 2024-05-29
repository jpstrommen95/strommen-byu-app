import React from 'react';
import PropTypes from 'prop-types';

function Square({ onClick, value }) {
  return (
    <button
      className="square"
      onClick={onClick}
      type="button"
    >
      {value}
    </button>
  );
}

Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Square.defaultProps = {
  value: '',
};

export default Square;
