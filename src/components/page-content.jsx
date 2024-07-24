import React from 'react';
import PropTypes from 'prop-types';

function PageContent({ component }) {
  return (
    <div className="page-content">
      {component}
    </div>
  );
}

PageContent.propTypes = {
  component: PropTypes.shape({}).isRequired,
};

export default PageContent;
