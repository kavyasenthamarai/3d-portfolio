import React from 'react';
import GlobalStyle from './styles/GlobalStyles'; // Corrected import path
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
    </div>
  );
};

export default App;
