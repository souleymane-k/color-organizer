import React, {useState} from 'react'
import colorData from "./color-data-json"
import ColorList from "./ColorList"
import './App.css';

function App() {

  const [colors, setColors] = useState(colorData);
  return (
    <div className="App">
       <ColorList 
       colors={colors}
       onRemoveColor={id=>{
       const newColors = colors.filter(color => color.id !==id);
       setColors(newColors);
      }}
       />;
    </div>
  );
}

export default App;
