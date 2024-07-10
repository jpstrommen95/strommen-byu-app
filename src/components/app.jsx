import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Game from './game';
import TopMenu from './top-menu';
import SideNavRail from './side-nav-rail';
import HelloWorld from './hello-world';
import VersionInfo from './version-info';
import PageContent from './page-content';
import AboutMeOverview from './about-me-overview';

function App() {
  return (
    <div className="app">
      <TopMenu />
      <SideNavRail
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
      />
      <PageContent
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
