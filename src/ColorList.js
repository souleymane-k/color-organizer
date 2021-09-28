import React from 'react';
import Color from "./Color";
import {useColors} from './color-hooks';


function ColorList() {

    const {colors} = useColors();

    if(!colors.length) return <div> No Color Listed. (Add Color)</div>

    return (
        <div>
            {
              colors.map(color => (
              <Color
               key={color.id}  
               {...color} 
               />))  
            }
        </div>
    )
}

// function ColorList({colors = [], onRemoveColor=f=>f, onRateColor = f => f}) {
//     const {colors} = useContext(ColorContext);

//     if(!colors.length) return <div> No Color Listed. (Add Color)</div>

//     return (
//         <div>
//             {
//               colors.map(color => (
//               <Color
//                key={color.id}  
//                {...color} 
//                onRemove = {onRemoveColor}
//                onRate={onRateColor}
//                />))  
//             }
//         </div>
//     )
// }

export default ColorList
