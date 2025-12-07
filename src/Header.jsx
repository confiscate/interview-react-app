import React, { useState, useEffect } from 'react';

function Header(props) {
    const { user, time } = props;
    const [count, setCount] = useState(0);
    const handleClick = (input) => {
        alert("you clicked: " + input)
    }
    return (
        <div>
            <h1>This is the header!</h1>
            <div>User is {user}</div>
            <div onClick={() => handleClick(user)}>Time is {time}</div>
            <hr />
            <div>{count}</div>
            <button onClick={() => setCount(count => count + 1)}>add</button>
            <button onClick={() => setCount(count => count - 1)}>subtract</button>
        </div>
    );
}

export default Header;