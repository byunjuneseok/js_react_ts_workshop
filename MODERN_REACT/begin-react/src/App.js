import React from 'react';
import Hello from './Hello';
import './App.css';


function App() {
    const name = 'react';
    const style = {
        // dash -> camel case
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem',
    };

    return (
        <>
            {/* Comment like this */}
            <Hello
                // Comment like this.
            />
            <div className="grey-box" style={style}>{name}</div>
        </>
    )
}

export default App;
