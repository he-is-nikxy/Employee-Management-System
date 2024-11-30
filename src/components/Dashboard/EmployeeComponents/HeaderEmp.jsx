import React from 'react'

const HeaderEmp = (props) => {

    const logOutUser = () => {
        localStorage.removeItem('loggedInUser','')
        props.changeUser("")
        // window.location.reload();
    }

    return (
        <>
            <header>
                <div className="upper">
                    <h3>Welcome, {props.data.firstName} 😉</h3>
                    <button onClick={logOutUser}>Logout</button>
                </div>
            </header>
        </>
    )
}

export default HeaderEmp