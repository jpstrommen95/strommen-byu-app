import React from 'react';
import PropTypes from 'prop-types';

/**
 * Creates a heading component for various contexts.
 *
 * @param {string} containerClass Class attributes to apply around the heading object.
 * @param {string} name The content for the heading.
 * @param {string[]} typographyClass The heading level.
 * @returns The jsx heading component.
 *
 * @example
 * ```
 * <SharedHeading typographyClasses={['heading-1', 'brand-100-text']} />
 * ```
 */
function SharedHeading({ containerClass, name, typographyClasses }) {
  return (
    <div className={containerClass} data-testid="shared-heading-container">
      <h1 className={typographyClasses.join(' ')}>{name}</h1>
    </div>
  );
}

SharedHeading.propTypes = {
  containerClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  typographyClasses: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SharedHeading;
