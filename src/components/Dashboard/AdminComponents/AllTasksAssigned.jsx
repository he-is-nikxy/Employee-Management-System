import React, { useState } from 'react'

const AllTasksAssigned = () => {

    const [status, setStatus] = useState("Pending")



    return (
        <>
            <div id='allTasks'>
                <div>
                    <h3>Employee Name</h3>
                    <h3>Task Title</h3>
                    {status == "Pending" ? <h3 style={{color:"red"}}> Status: {status == "Pending" ? "Pending" : "Completed"} </h3> : <h3 style={{color:"green"}}> Status: {status == "Pending" ? "Pending" : "Completed"} </h3>}
                    
                </div>
                <div>
                    <h3>Employee Name</h3>
                    <h3>Task Title</h3>
                    {status == "Pending" ? <h3 style={{color:"red"}}> Status: {status == "Pending" ? "Pending" : "Completed"} </h3> : <h3 style={{color:"green"}}> Status: {status == "Pending" ? "Pending" : "Completed"} </h3>}
                </div>
                <div>
                    <h3>Employee Name</h3>
                    <h3>Task Title</h3>
                    {status == "Pending" ? <h3 style={{color:"red"}}> Status: {status == "Pending" ? "Pending" : "Completed"} </h3> : <h3 style={{color:"green"}}> Status: {status == "Pending" ? "Pending" : "Completed"} </h3>}
                </div>
                <div>
                    <h3>Employee Name</h3>
                    <h3>Task Title</h3>
                    {status == "Pending" ? <h3 style={{color:"red"}}> Status: {status == "Pending" ? "Pending" : "Completed"} </h3> : <h3 style={{color:"green"}}> Status: {status == "Pending" ? "Pending" : "Completed"} </h3>}
                </div>
            </div>
        </>
    )
}

export default AllTasksAssigned