import './App.css';

import React, { useRef, useState } from 'react';
import Hello from './Hello';
import Wrapper from "./Wrapper";
import Counter from "./Counter";
import InputSample from "./InputSample";
import UserList from "./UserList";
import CreateUser from "./CreateUser";


Hello.defaultProps = {
    name: 'unknown'
};
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
function App_3() {
    return (
        <Counter />
    )
}
function App_4() {
    return (
        <InputSample />
    )
}

function App() {
    const [inputs, setInputs] = useState(
        {
            username: '',
            email: '',
        }
    );

    const { username, email } = inputs;

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const [users, setUsers] = useState(
        [
            {
                id: 1,
                username: 'AAA',
                email: 'aaa@gmail.com',
                active: true,
            },
            {
                id: 2,
                username: 'BBB',
                email: 'bbb@gmail.com',
                active: false,
            },
            {
                id: 3,
                username: 'CCC',
                email: 'ccc@gmail.com',
                active: false,
            },
        ]
    );

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            username,
            email,
        };
        //setUsers([...users, user]);
        setUsers(users.concat(user));
        setInputs(
            {
                username: '',
                email: ''
            }
        );

        nextId.current += 1;
    };
    const onRemove = id => {
        setUsers(users.filter(user => user.id !== id));
    };
    const onToggle = id => {
        setUsers(users.map(user => user.id === id
        ? {...user, active: !user.active}
        : user
        ))
    };

    return (
        <>
            <CreateUser
                username={username}
                email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList
                users={users}
                onRemove={onRemove}
                onToggle={onToggle}
            />

        </>
    )
}

export default App;
