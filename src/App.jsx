import './App.css'
import { useState } from 'react';
import Header from './components/Header';
import Events from "./components/Events";

function App() {

  const [ title, setTitle ] = useState("");

  return (
    <>
      <Header setTitle={ setTitle } />
      <Events title={ title } />
    </>
  )
}

export default App