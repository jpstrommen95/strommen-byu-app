import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import { MemoryRouter } from 'react-router-dom';
import VersionInfo from './version-info';

/** (Note the prepended v, but otherwise:) From semver.org, see also https://regex101.com/r/vkijKf/1/. */
const semVerRegex = /^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;
const stageRegex = /^(local|dev|prod|unknown)$/i;

function mockComponent() {
  return (
    <MemoryRouter>
      <VersionInfo />
    </MemoryRouter>
  );
}

function setupLocation({ href }) {
  delete window.location;
  window.location = {
    href,
  };
}

describe('version info', () => {
  it('renders the component\'s info', () => {
    expect.assertions(3);
    render(mockComponent());
    const titleElement = screen.queryByRole('heading', { name: /version/i });
    const versionElement = screen.queryByText(semVerRegex);
    const stageElement = screen.queryByText(stageRegex);
    expect(titleElement).toBeInTheDocument();
    expect(versionElement).toBeInTheDocument();
    expect(stageElement).toBeInTheDocument();
  });

  it('should identify a local env', () => {
    expect.assertions(1);
    setupLocation({ href: 'https://localhost:1234' });
    render(mockComponent());
    const stageElement = screen.queryByText(stageRegex);
    expect(stageElement).toHaveTextContent('local');
  });

  it('should identify a dev env', () => {
    expect.assertions(1);
    setupLocation({ href: 'https://dev.strommenbyu.com/about-me' });
    render(mockComponent());
    const stageElement = screen.queryByText(stageRegex);
    expect(stageElement).toHaveTextContent('dev');
  });

  it('should identify a prod env', () => {
    expect.assertions(1);
    setupLocation({ href: 'https://strommenbyu.com/about-me?abc=true' });
    render(mockComponent());
    const stageElement = screen.queryByText(stageRegex);
    expect(stageElement).toBeNull();
  });

  it('should identify an unknown env', () => {
    expect.assertions(1);
    setupLocation({ href: 'example.com' });
    render(mockComponent());
    const stageElement = screen.queryByText(stageRegex);
    expect(stageElement).toHaveTextContent('unknown');
  });
});
