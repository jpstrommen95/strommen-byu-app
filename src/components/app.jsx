import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Fishers from './fishers';
import Game from './game';
import TopMenu from './top-menu';
import VersionInfo from './version-info';
import AboutMeOverview from './about-me-overview';
import NavContentBody from './nav-content-body';
import PageContent from './page-content';
import Relationships from './relationships';
import PeopleNetworkGraph from './people-network-graph';

const relationships = [
  '(M) John Doe, (F) Jane Doe',
  '(F) Jane Doe, (M) Mickey Mouse',
  '(M) John Doe, (M) Mickey Mouse',
  '(M) Mickey Mouse, (M) Donald Duck',
  '(M) Donald Duck, (F) Minnie Mouse',
  '(F) Minnie Mouse, (F) Daisy Duck',
  '(F) Daisy Duck, (M) Scrooge McDuck',
  '(M) Scrooge McDuck, (M) Huey',

  // Additional cycles:
  '(M) Mickey Mouse, (F) Minnie Mouse',
  '(F) Minnie Mouse, (M) Mickey Mouse',
  '(M) Donald Duck, (M) Scrooge McDuck',
  '(M) Scrooge McDuck, (M) Donald Duck',
  '(M) Huey, (M) Mickey Mouse',
  '(F) Jane Doe, (M) John Doe',

  // More characters and relationships:
  '(M) Huey, (M) Dewey',
  '(M) Dewey, (M) Louie',
  '(M) Louie, (M) Huey', // Forms a triangle cycle with Huey and Dewey
  '(M) Scrooge McDuck, (M) Ludwig Von Drake',
  '(M) Ludwig Von Drake, (M) Donald Duck',
  '(M) Donald Duck, (F) Webby Vanderquack',
  '(F) Webby Vanderquack, (M) Huey',
  '(M) Goofy, (M) Mickey Mouse',
  '(M) Goofy, (M) Donald Duck',
  '(M) Goofy, (M) Max Goof',
  '(M) Max Goof, (F) Roxanne',
  '(F) Roxanne, (M) Mickey Mouse', // Introduces another cycle
  '(F) Jane Doe, (F) Minnie Mouse', // Adds a connection between Jane and Minnie
  '(M) John Doe, (M) Scrooge McDuck', // Extends John Doe’s reach
  '(M) Ludwig Von Drake, (M) Max Goof', // Connects unrelated families
];

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
            name: 'Fishers Cleanup',
            routeTo: '/fishers',
          },
          {
            name: 'Games',
            routeTo: '/games',
          },
          {
            name: 'Ministering',
            routeTo: '/ministering',
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
            <Route path="/fishers" element={<Fishers />} />
            <Route path="/games" element={<PageContent component={<Game />} />} />
            <Route path="/i-made-that-up.org" element={<PageContent component={<Relationships />} />} />
            <Route path="/i-made-that-up" element={<PageContent component={<Relationships />} />} />
            <Route path="/imadethatup.org" element={<PageContent component={<Relationships />} />} />
            <Route path="/imadethatup" element={<PageContent component={<Relationships />} />} />
            <Route path="/relationships" element={<PageContent component={<Relationships />} />} />
            <Route path="/ministering" element={<PageContent component={<PeopleNetworkGraph relationships={relationships} />} />} />
            <Route path="/version" element={<PageContent component={<VersionInfo />} />} />
          </Routes>
          )}
      />
    </div>
  );
}

export default App;
