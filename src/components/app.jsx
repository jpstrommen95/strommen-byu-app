import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Game from './game';
import TopMenu from './top-menu';
import SideNavRail from './side-nav-rail';
import HelloWorld from './hello-world';

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
      <Routes>
        <Route path="/" element={<HelloWorld />} />
        <Route path="/about-me" element={<HelloWorld />} />
        <Route path="/games" element={<Game />} />
        <Route
          path="/version"
          element={(
            <div>
              <h1>Version</h1>
              <p>v0.0.0</p>
            </div>
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
