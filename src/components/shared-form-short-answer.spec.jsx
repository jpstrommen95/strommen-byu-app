import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  it, expect, describe,
} from '@jest/globals';
import SharedFormShortAnswer from './shared-form-short-answer';

function mockDefaultComponent({ placeholder, label }) {
  return (
    <SharedFormShortAnswer
      placeholder={placeholder}
      label={label}
    />
  );
}

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
    render(mockDefaultComponent({ label: 'my label', placeholder: 'my placeholder' }));
    const inputElement = screen.queryByLabelText('my label');
    expect(inputElement).toBeInTheDocument();
  });

  it('trims leading whitespace from the response', () => {
    expect.assertions(1);
    render(mockDefaultComponent({ label: 'my label', placeholder: 'my placeholder' }));
    const inputElement = screen.queryByLabelText('my label');
    userEvent.type(inputElement, '  hello');
    expect(inputElement).toHaveValue('hello');
  });

  it('trims leading whitespace, but not trailing', () => {
    expect.assertions(1);
    render(mockDefaultComponent({ label: 'my label', placeholder: 'my placeholder' }));
    const inputElement = screen.queryByLabelText('my label');
    userEvent.type(inputElement, '  hello my name is Anton  ');
    expect(inputElement).toHaveValue('hello my name is Anton  ');
  });

  it('ignores response characters beyond the max character limit', () => {
    expect.assertions(1);
    render(mockComponent({ label: 'my label', placeholder: 'my placeholder', maxCharacters: 5 }));
    const inputElement = screen.queryByLabelText('my label');
    userEvent.type(inputElement, 'hello my name is Anton');
    expect(inputElement).toHaveValue('hello');
  });

  it('should not count leading whitespace in the max character limit', () => {
    expect.assertions(1);
    render(mockComponent({ label: 'my label', placeholder: 'my placeholder', maxCharacters: 20 }));
    const inputElement = screen.queryByLabelText('my label');
    userEvent.type(inputElement, '                   hello lots of spaces');
    expect(inputElement).toHaveValue('hello lots of spaces');
  });

  it('ignores response characters beyond the default max character limit', () => {
    expect.assertions(1);
    render(mockDefaultComponent({ label: 'my label', placeholder: 'my placeholder' }));
    const inputElement = screen.queryByLabelText('my label');
    userEvent.type(inputElement, 'AbcdefghijklmnopqrstuvwxyzAbcdefghijklmnopqrstuvwxyzAbcdefghijklmnopqrstuvwxyzAbcdefghijklmnopqrstuvwxyz');
    expect(inputElement).toHaveValue('AbcdefghijklmnopqrstuvwxyzAbcdefghijklmnopqrstuvwxyzAbcdefghijklmnopqrstuvwxyzAbcdefghijklmnopqrstuv');
  });
});
