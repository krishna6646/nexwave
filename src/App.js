import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Main />}
          />
          <Route
            exact
            path="/home"
            element={<Home />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
