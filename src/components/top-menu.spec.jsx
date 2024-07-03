import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, describe, expect,
} from '@jest/globals';
import TopMenu from './top-menu';

function mockTopMenu() {
  return <TopMenu />;
}

describe('top menu', () => {
  it('should render the app title text', () => {
    expect.assertions(3);
    // WHEN
    render(mockTopMenu());
    const topMenuElement = screen.queryByText(/strommenbyu.com/i);

    // THEN
    expect(topMenuElement).toBeInTheDocument();
    expect(topMenuElement).toHaveClass('display-1');
    expect(topMenuElement).toHaveClass('top-menu-name');
  });

  it('should render a link to linkedin', () => {
    expect.assertions(2);
    // WHEN
    render(mockTopMenu());
    const htmlElement = screen.queryByRole('link', /linkedin/i);

    // THEN
    expect(htmlElement).toBeInTheDocument();
    expect(htmlElement).toHaveClass('label-2');
  });

  it('should contain a link to a linkedin page', () => {
    expect.assertions(1);
    // WHEN
    render(mockTopMenu());
    const htmlElement = screen.queryByRole('link', /linkedin/i);

    // THEN
    expect(htmlElement.href).toMatch(/linkedin.com.*justin.*strommen/i);
  });
});
