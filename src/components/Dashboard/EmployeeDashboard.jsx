import React from 'react'
import './EmployeeDashboard.css'
import HeaderEmp from './EmployeeComponents/HeaderEmp'
import TasksCount from './EmployeeComponents/TasksCount'
import Tasks from './EmployeeComponents/Tasks'

const EmployeeDashboard = (props) => {


  
    return (
        <>
            <div id='main'>
                <HeaderEmp changeUser={props.changeUser} data={props.data} />
                <TasksCount data={props.data} />
                <Tasks data={props.data} />
            </div>
        </>
    )
}

export default EmployeeDashboard