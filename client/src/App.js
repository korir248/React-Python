import React from 'react';
import './App.css';

import { BrowserRouter,Routes, Route} from 'react-router-dom'
import Books from './components/Books';
import Home from './components/Home';

function App() {
  
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/books" element={<Books/>} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
