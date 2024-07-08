import React from 'react';
import { render, screen } from '@testing-library/react';
import {
  it, expect, describe,
} from '@jest/globals';
import { MemoryRouter } from 'react-router-dom';
import VersionInfo from './version-info';

/** (Note the prepended v, but otherwise:) From semver.org, see also https://regex101.com/r/vkijKf/1/. */
const semVerRegex = /^v(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$/;

function mockComponent() {
  return (
    <MemoryRouter>
      <VersionInfo />
    </MemoryRouter>
  );
}

describe('version info', () => {
  it('renders the component\'s info', () => {
    expect.assertions(3);
    render(mockComponent());
    const titleElement = screen.queryByRole('heading', { name: /version/i });
    const versionElement = screen.queryByText(semVerRegex);
    const stageElement = screen.queryByText(/dev/i);
    expect(titleElement).toBeInTheDocument();
    expect(versionElement).toBeInTheDocument();
    expect(stageElement).toBeInTheDocument();
  });
});
