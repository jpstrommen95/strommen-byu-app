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
    render(mockComponent({ label: 'my label', placeholder: 'my placeholder' }));
    const htmlElement = screen.queryByLabelText('my label');
    expect(htmlElement).toBeInTheDocument();
  });
});
