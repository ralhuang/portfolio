import React, { useState } from 'react';
import logo from './logo.svg';

import { Navbar } from './components/Navbar/Navbar.js';
import { Hero } from './components/Hero/Hero.js';

import { Projects } from './pages/projects.js';
import { Resume } from './pages/resume.js';

function App() {

  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
    console.log("Current Theme: ", theme);
  }
    
  return (
    <div className={theme}>
      <Navbar toggleTheme={toggleTheme}/>
      <div id='top-scroll' className="content scroll-smooth">
        <section>
          <Hero />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Resume />
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </section>
      </div>
    </div>
      
  );
}

export default App;
