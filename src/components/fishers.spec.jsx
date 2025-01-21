import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import Fishers from './fishers';

function mockComponent() {
  return (
    <Fishers />
  );
}

describe('fishers', () => {
  it('renders the component', () => {
    expect.assertions(1);
    render(mockComponent());
    const htmlElement = screen.queryByRole('heading', { name: /fishers 2nd ward meetinghouse cleanup/i });
    expect(htmlElement).toBeInTheDocument();
  });
});
