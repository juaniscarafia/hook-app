import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export default function FocusScreen() {
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr />
            <input 
                ref={ inputRef }
                className="form-control"
                placeholder="Su nombre"
            />
            <button 
                className="btn btn-outline-primary mt-5"
                onClick={ handleClick }
            >Focus</button>
        </div>
    )
}
