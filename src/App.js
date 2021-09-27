import React from 'react';
// import colorData from "./color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm"
// import {v4} from "uuid";
import './App.css';

function App() {

  // const [colors, setColors] = useState(colorData);
  return (
    <>
    <AddColorForm />
    <ColorList />
    
    </>
  );
}

export default App;
