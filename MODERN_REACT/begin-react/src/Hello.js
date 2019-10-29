import React from 'react';

function Hello({ color, name, isSpecial  }) {
    // JSX
    // return <div>HiHiHi~</div>;

    return (
        <div style={{
            color
        }}>
            {isSpecial ? <b>*</b> : null}
            {isSpecial && <b>*</b>}
            <b>{isSpecial? 'special!!' : 'notspecial'}</b>
            Hello, {name}
        </div>
    )
}

export default Hello;