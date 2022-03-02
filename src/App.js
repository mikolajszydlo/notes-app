import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import MainLayout from './components/layout/MainLayout/MainLayout';
import NoteList from './components/views/NoteList/NoteList';
import SingleNote from './components/views/SingleNote/SingleNoteContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <MainLayout>
            <Routes>
              <Route path={'/'} element={<NoteList/>} />
              <Route path={'/:id'} element={<SingleNote/>} />
            </Routes>
          </MainLayout>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
