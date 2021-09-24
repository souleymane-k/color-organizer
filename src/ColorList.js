import React from 'react'
import Color from "./Color"

function ColorList({colors = [], onRemoveColor=f=>f}) {
    if(!colors.length) return <div> No Color Listed</div>
    return (
        <div>
            {
              colors.map(color => <Color key={color.id}  {...color} onRemove = {onRemoveColor}/>)  
            }
        </div>
    )
}

export default ColorList