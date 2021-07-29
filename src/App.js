import React from 'react';
import './App.css';
import { Header } from './components/header';
import { Introduce } from './components/introduce';
import { Skill } from './components/skill'
import { Projects } from './components/projects';
import { Footer } from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduce/>
      <Skill/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
