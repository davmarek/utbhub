import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/main.scss';

import Home from './pages/Home';
import Menu from './pages/Menu';

render(
  <React.StrictMode>
    <BrowserRouter basename="/utbhub">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/:faculty" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
