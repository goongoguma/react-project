import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './views/main';

const View = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default View;
