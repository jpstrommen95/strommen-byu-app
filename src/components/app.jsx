import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Game from './game';
import TopMenu from './top-menu';
import VersionInfo from './version-info';
import AboutMeOverview from './about-me-overview';
import NavContentBody from './nav-content-body';
import PageContent from './page-content';
import Relationships from './relationships';

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
            name: 'Relationship Questionnaire',
            routeTo: '/relationships',
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
            <Route path="/games" element={<PageContent component={<Game />} />} />
            <Route path="/i-made-that-up" element={<PageContent component={<Relationships />} />} />
            <Route path="/imadethatup" element={<PageContent component={<Relationships />} />} />
            <Route path="/relationships" element={<PageContent component={<Relationships />} />} />
            <Route path="/version" element={<PageContent component={<VersionInfo />} />} />
          </Routes>
          )}
      />
    </div>
  );
}

export default App;
