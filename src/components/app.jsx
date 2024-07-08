import React from 'react';
import Game from './game';
import TopMenu from './top-menu';
import SideNavRail from './side-nav-rail';

function App() {
  return (
    <div className="app">
      <TopMenu />
      <SideNavRail
        pageArray={[
          { name: 'About Me' },
          { name: 'Games' },
          { name: 'Version' },
        ]}
      />
      <Game />
      {' '}
    </div>
  );
}

export default App;
