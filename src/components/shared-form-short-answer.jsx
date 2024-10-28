import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DEFAULT_MAX_CHARACTERS = 100;

function SharedFormShortAnswer({
  autoComplete,
  label,
  maxCharacters = DEFAULT_MAX_CHARACTERS,
  placeholder,
}) {
  const [response, setResponse] = useState('');

  const handleResponseChange = (event) => {
    setResponse(event.target.value.trimStart());
  };

  return (
    <div className="short-form-description">
      <label htmlFor="description">{label}</label>
      <input
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
