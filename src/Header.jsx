import React from 'react'

function Header(props) {
    const { user, time } = props;

    const handleClick = (input) => {
        alert("you clicked: " + input)
    }
    return (
        <div>
            <h1>This is the header!</h1>
            <div>User is {user}</div>
            <div onClick={() => handleClick(user)}>Time is {time}</div>
        </div>
    );
}

export default Header;