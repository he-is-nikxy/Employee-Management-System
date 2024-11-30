import React from 'react'

const FailedTask = ({data}) => {
    return (
        <div className='allTasks'>
            <div className='taskPriority'>
                <h4>High</h4>
                <h3>Failed Tasks</h3>
                <p>{data.taskDate}</p>
            </div>
            <h3>{data.taskTitle} ( {data.category} )</h3>
            <p>{data.taskDescription}</p>
            <div className='taskButtons'>
                <button className='declineTask'>Failed</button>
                {/* <button className='acceptTask'>Mark Complete</button> */}
            </div>
        </div>
    )
}

export default FailedTask