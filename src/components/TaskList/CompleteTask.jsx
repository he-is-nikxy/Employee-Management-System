import React from 'react'

const CompleteTask = ({data}) => {
    return (
        <div className='allTasks'>
            <div className='taskPriority'>
                <h4>Done</h4>
                <h3>Completed Tasks</h3>
                <p>{data.taskDate}</p>
            </div>
            <h3>{data.taskTitle} ( {data.category} )</h3>
            <p>{data.taskDescription}</p>
            <div className='taskButtons'>
                {/* <button className='declineTask'>Decline</button> */}
                <button className='acceptTask'>Completed</button>
            </div>
        </div>
    )
}

export default CompleteTask