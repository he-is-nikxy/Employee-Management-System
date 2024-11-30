import React from 'react'

const TasksCount = ({data}) => {
    return (
        <>
            <div className='tasksCount'>
                <div id='newTask'>
                    <h1>{data.taskCounts.newTask}</h1>
                    <h3>New Tasks</h3   >
                </div>
                <div id='completedTask'>
                    <h1>{data.taskCounts.completed}</h1>
                    <h3>Completed Tasks</h3   >
                </div>
                <div id='acceptedTask'>
                    <h1>{data.taskCounts.active}</h1>
                    <h3>Accepted Tasks</h3   >
                </div>
                <div id='failedTask'>
                    <h1>{data.taskCounts.failed}</h1>
                    <h3>Failed Tasks</h3   >
                </div>
            </div>
        </>
    )
}

export default TasksCount