import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import Relationships from './relationships';

function mockComponent() {
  return (
    <Relationships />
  );
}

describe('relationships', () => {
  it('renders the component', () => {
    expect.assertions(1);
    render(mockComponent({ name: 'my test' }));
    const htmlElement = screen.queryByText(/relationship/i);
    expect(htmlElement).toBeInTheDocument();
  });
});
