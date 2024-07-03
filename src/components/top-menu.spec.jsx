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
  it('should render the top menu', () => {
    expect.assertions(1);
    // WHEN
    render(mockTopMenu());
    const topMenuElement = screen.getByRole('heading', /strommenbyu.com/i);

    // THEN
    expect(topMenuElement).toBeInTheDocument();
  });

  it('should contain the app title in the menu', () => {
    expect.assertions(1);
    // WHEN
    render(mockTopMenu());
    const topMenuElement = screen.queryByRole('div');

    // THEN
    expect(topMenuElement).toBeInTheDocument();
  });
});
