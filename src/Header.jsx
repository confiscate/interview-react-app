import React from 'react'

function Header(props) {
    const { user, time } = props

    const rain = [
        { id: 1, val: 1.29 },
        { id: 2, val: 3.9 },
        { id: 3, val: 183.91 }
    ]

    const handleClick = (input) => {
        alert("you clicked: " + input)
    }
    return (
        <div>
            <h1>This is the header!</h1>
            <div>User is {user}</div>
            <div onClick={() => handleClick(user)}>Time is {time}</div>
            <ul>
                {rain.map(r => (
                    <li key={r.id}>{r.val}</li>
                ))
                }
            </ul>
        </div>
    );
}

export default Header;