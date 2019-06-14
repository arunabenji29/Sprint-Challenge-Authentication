import React from 'react'

const Users = (props) => {

    console.log('Users props ',props)
    const logoutSubmit = (event) => {
        event.preventDefault()
        localStorage.removeItem('token')
        props.history.push('/login')
    }

    return (
        <div>
        <button onClick={logoutSubmit}>Logout</button>
        {props.users.map(eachJoke => (

            <div className='cards'>
            <p key={eachJoke.id}>{eachJoke.joke}</p>
            </div>
        ))}
        </div>
    )
}

export default Users