import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import { MemoryRouter } from 'react-router-dom';
import SideNavRail from './side-nav-rail';

function mockComponent({ pageArray }) {
  return (
    <MemoryRouter>
      <SideNavRail
        pageArray={pageArray}
      />
    </MemoryRouter>
  );
}

function mock3PageSideRail() {
  return mockComponent({
    pageArray: [
      {
        name: 'Page 1',
      },
      {
        name: 'Page 2',
      },
      {
        name: 'Page 3',
      },
    ],
  });
}

function mock4PageSideRail() {
  return mockComponent({
    pageArray: [
      {
        name: 'Page 1',
      },
      {
        name: 'Page 2',
      },
      {
        name: 'Page 3',
      },
      {
        name: 'Page 4',
      },
    ],
  });
}

describe('side nav rail', () => {
  it('renders a side nav rail with a single page', () => {
    expect.assertions(1);
    render(mock3PageSideRail());
    const htmlElement = screen.queryByRole('heading', { name: /page 1/i });
    expect(htmlElement).toBeInTheDocument();
  });

  it('renders a 3-page side rail', () => {
    expect.assertions(7);
    render(mock3PageSideRail());
    const navElements = screen.queryAllByRole('heading', { name: /page ./i });
    expect(navElements).toHaveLength(3);
    expect(navElements[0]).toBeInTheDocument();
    expect(navElements[1]).toBeInTheDocument();
    expect(navElements[2]).toBeInTheDocument();
    expect(navElements[0]).toHaveTextContent(/page 1/i);
    expect(navElements[1]).toHaveTextContent(/page 2/i);
    expect(navElements[2]).toHaveTextContent(/page 3/i);
  });

  it('renders a 4-page side rail', () => {
    expect.assertions(5);
    render(mock4PageSideRail());
    const navElements = screen.queryAllByRole('heading', { name: /page ./i });
    expect(navElements).toHaveLength(4);
    expect(navElements[0]).toBeInTheDocument();
    expect(navElements[1]).toBeInTheDocument();
    expect(navElements[2]).toBeInTheDocument();
    expect(navElements[3]).toBeInTheDocument();
  });
});
