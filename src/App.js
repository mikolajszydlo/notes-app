import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import NoteList from './components/views/NoteList/NoteList';
import SingleNote from './components/views/SingleNote/SingleNote';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainLayout>
          <Routes>
            <Route path={'/'} element={<NoteList/>} />
            <Route path={'/:id'} element={<SingleNote/>} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </div>
  );
}

export default App;
