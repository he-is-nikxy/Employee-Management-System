import React from 'react'

const NewTask = ({data}) => {
    return (
        <div className='allTasks'>
            <div className='taskPriority'>
                <h4>High</h4>
                <h3>New Tasks</h3>
                <p>{data.taskDate}</p>
            </div>
            <h3>{data.taskTitle} ( {data.category} )</h3>
            <p>{data.taskDescription}</p>
            <div className='taskButtons'>
                <button className='declineTask'>Mark Failed</button>
                <button className='acceptTask'>Mark Complete</button>
            </div>
        </div>
    )
}

export default NewTask