import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
