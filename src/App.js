import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World</h1>
        <p>I'm Sarah Ryoo</p>
      </header>
      <AboutMe />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
