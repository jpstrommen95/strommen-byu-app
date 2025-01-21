import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RatingSlider({
  range, onRatingChange, initialRating, label,
}) {
  const rangeArray = range.split('-');
  const min = rangeArray[0];
  const max = rangeArray[1];
  const [rating, setRating] = useState(initialRating || min);

  const handleChange = (e) => {
    const newRating = Number(e.target.value);
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
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
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <label htmlFor={inputId}>
        <div style={{ marginTop: '10px' }}>
          {label}
          :
          <strong>
            {rating}
          </strong>
        </div>
        <input
          type="range"
          id={inputId}
          min={min}
          max={max}
          step={1}
          value={rating}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </label>
    </div>
  );
}

RatingSlider.propTypes = {
  label: PropTypes.string.isRequired,
  range: PropTypes.string.isRequired,
  onRatingChange: PropTypes.func,
  initialRating: PropTypes.number,
};

RatingSlider.defaultProps = {
  onRatingChange: null,
  initialRating: null,
};

export default RatingSlider;
