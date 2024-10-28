import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import SharedFormShortAnswer from './shared-form-short-answer';

function mockComponent({ placeholder, label, maxCharacters }) {
  return (
    <SharedFormShortAnswer
      placeholder={placeholder}
      label={label}
      maxCharacters={maxCharacters}
    />
  );
}

describe('shared form short answer', () => {
  it('renders the component', () => {
    expect.assertions(1);
    render(mockComponent({ label: 'my label' }));
    const htmlElement = screen.queryByRole('input', { name: /my label/i }); // FIXME find the actual role
    expect(htmlElement).toBeInTheDocument();
  });
});
