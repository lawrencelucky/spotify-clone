import React, { useState, useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';

import { getTokenFromUrl } from './spotify';

import Login from './Login';

function App() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <div className='app'>{token ? <h1>I am Logged in</h1> : <Login />}</div>
  );
}

export default App;
