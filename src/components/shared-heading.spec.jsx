import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import SharedHeading from './shared-heading';

function mockComponent({ name }) {
  return (
    <SharedHeading
      containerClass="test-container-class"
      name={name}
      typographyClasses={['test-paragraph-1', 'test-color-text']}
    />
  );
}

describe('shared heading', () => {
  it('renders the component', () => {
    expect.assertions(1);
    render(mockComponent({ name: 'my test' }));
    const htmlElement = screen.queryByRole('heading', { name: /my test/i });
    expect(htmlElement).toBeInTheDocument();
  });

  it('accepts a container class', () => {
    expect.assertions(1);
    render(mockComponent({ name: 'my test' }));
    const htmlElement = screen.queryByTestId('shared-heading-container');
    expect(htmlElement).toHaveClass('test-container-class');
  });

  it('accepts multiple typography classes', () => {
    expect.assertions(2);
    render(mockComponent({ name: 'my test' }));
    const htmlElement = screen.queryByRole('heading', { name: /my test/i });
    expect(htmlElement).toHaveClass('test-paragraph-1');
    expect(htmlElement).toHaveClass('test-color-text');
  });
});
