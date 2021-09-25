import React, {useState} from 'react'
// import React, {useRef} from 'react'

 


function AddColorForm() {

    const [title, setTitle] = useState('');
    const [color, setColor] = useState('#000000');
    // const txtTitle = useRef();
    // const hexColor = useRef();

    const submit=(e)=>{
        e.preventDeafault();
        // const title = txtTitle.current.value;
        // const color = hexColor.current.value;
        onNewColor(title, color);
        // txtitle.current.value('');
        // hexColor.current.value('');
        setTitle('');
        setColor('');
    };

    return (
        <form onSubmit={submit}>
            <input
             value={title} 
             onChange={event => setTitle=(event.target.value)}
             type='text' 
             placeholder='color title ...'  
             required 
             />
            <input 
            value={color} 
            onChange={event => setColor(event.target.value)}
            type='color' 
            required
            />
            <button>ADD</button>
        </form>
    );
}

export default AddColorForm
