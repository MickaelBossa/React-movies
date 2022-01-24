// Librairies
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Composants
import Home from './pages/Home';
import UserList from './pages/UserList';
import Error404 from './pages/Error404';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/coup-de-coeur' element={<UserList />} />
        <Route path='*' element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
