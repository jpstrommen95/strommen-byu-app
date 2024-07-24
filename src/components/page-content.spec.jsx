import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import PageContent from './page-content';

function mockComponent({ component }) {
  return (
    <PageContent
      component={component}
    />
  );
}

describe('page content', () => {
  it('renders the component', () => {
    expect.assertions(1);
    render(mockComponent({ component: <h1>hello world</h1> }));
    const htmlElement = screen.queryByRole('heading', { name: /hello world/i });
    expect(htmlElement).toBeInTheDocument();
  });
});
