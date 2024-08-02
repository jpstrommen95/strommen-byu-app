import React from 'react';
import pjson from '../../package.json';

function urlToStage() {
  const url = window.location.href;
  if (/^https?:\/\/localhost/.test(url)) {
    return 'local';
  }

  if (/^https?:\/\/dev.strommenbyu.com/.test(url)) {
    return 'dev';
  }

  if (/^https?:\/\/strommenbyu.com/.test(url)) {
    return '';
  }

  return 'unknown';
}

function VersionInfo() {
  return (
    <div>
      <h1>Version</h1>
      <p>{`v${pjson.version}`}</p>
      <p>{urlToStage()}</p>
    </div>
  );
}

export default VersionInfo;
