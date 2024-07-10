import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import AboutMeOverview from './about-me-overview';

function mockComponent() {
  return (
    <AboutMeOverview />
  );
}

describe('about me overview', () => {
  it('renders the component', () => {
    expect.assertions(1);
    render(mockComponent());
    const htmlElement = screen.queryByText(/justin strommen is a disciple/i);
    expect(htmlElement).toBeInTheDocument();
  });
});
