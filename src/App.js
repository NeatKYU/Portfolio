import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Introduce } from './components/introduce';
import { Skill } from './components/skill'
import { Projects } from './components/projects';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduce/>
      <Skill/>
      <Projects/>
    </div>
  );
}

export default App;
