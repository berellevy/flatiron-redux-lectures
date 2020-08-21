import React from 'react';

import './App.css';
import NotesContainer from './containers/NotesContainer';
import NoteForm from './components/NoteForm';

function App(props) {
  console.log(props);
  return (
    <>
      <NoteForm/>
      <NotesContainer />
    </>
  );
}

export default App;
