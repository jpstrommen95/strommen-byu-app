import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_MAX_CHARACTERS = 100;

function SharedFormShortAnswer({
  autoComplete,
  label,
  maxCharacters,
  placeholder,
}) {
  const [response, setResponse] = useState('');

  const handleResponseChange = (event) => {
    setResponse(event.target.value.trimStart());
  };

  /**
   * Debugging Tip
   * If you encounter issues with labels containing special characters (e.g., My Label!),
   * you may need a more robust id sanitization function to strip invalid characters:
   *
   * `const sanitizeId = (text) => text.replace(/[^a-z0-9-_]/gi, '').toLowerCase();`
   */
  const inputId = label.replace(/\s+/g, '-').toLowerCase(); // Replace spaces with hyphens and convert to lowercase

  return (
    <div className="short-form-description">
      <label htmlFor={inputId}>{label}</label>
      <input
        id={inputId}
        type="text"
        autoComplete={autoComplete || null}
        maxLength={maxCharacters}
        onChange={handleResponseChange}
        placeholder={placeholder}
        value={response}
      />
      <div className="character-counter">
        {response.length}
        /
        {maxCharacters}
      </div>
    </div>
  );
}

SharedFormShortAnswer.propTypes = {
  autoComplete: PropTypes.string,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  maxCharacters: PropTypes.number,
};

SharedFormShortAnswer.defaultProps = {
  autoComplete: '', // default should be falsey
  maxCharacters: DEFAULT_MAX_CHARACTERS,
};

export default SharedFormShortAnswer;
