import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Game from './game';
import TopMenu from './top-menu';
import VersionInfo from './version-info';
import AboutMeOverview from './about-me-overview';
import NavContentBody from './nav-content-body';

function App() {
  return (
    <div className="app">
      <TopMenu />
      <NavContentBody
        pageArray={[
          {
            name: 'About Me',
            routeTo: '/about-me',
          },
          {
            name: 'Games',
            routeTo: '/games',
          },
          {
            name: 'Version',
            routeTo: '/version',
          },
        ]}
        component={(
          <Routes>
            <Route path="/" element={<AboutMeOverview />} />
            <Route path="/about-me" element={<AboutMeOverview />} />
            <Route path="/games" element={<Game />} />
            <Route path="/version" element={<VersionInfo />} />
          </Routes>
          )}
      />
    </div>
  );
}

export default App;
