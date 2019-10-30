import React, { useState, useRef } from 'react';


function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const {name, nickname} = inputs;
    const nameInput = useRef();

    const onChange = (e) => {
        const {name, value} = e.target;
        // console.log(e.target.name);
        // console.log(e.target.value);
        // const nextInputs = {
        //    ...inputs,
        //    [name]: value,
        // };

        // nextInputs[name] = value;

        //setInputs(nextInputs);
        setInputs({
            // copy object
            ...inputs,
            // edit value
            [name]: value,
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input
                name="name"
                placeholder="name"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input
                name="nickname"
                placeholder="nickname"
                onChange={onChange}
                value={nickname}
            />
            <button onClick={onReset}>Reset</button>
            <div>
                <b>value: </b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;