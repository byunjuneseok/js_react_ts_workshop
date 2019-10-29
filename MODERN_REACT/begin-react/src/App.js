import React from 'react';
import Hello from './Hello';
import Wrapper from "./Wrapper";
import Counter from "./Counter";

import './App.css';

function App_1() {
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

function App_2() {
    return (
        <Wrapper>
            <Hello name="react" color="red" isSpecial={true} />
            <Hello color="pink" />
        </Wrapper>
    )
}

function App() {
    return (
        <Counter />
    )
}

Hello.defaultProps = {
    name: 'unknown'
};

export default App;
