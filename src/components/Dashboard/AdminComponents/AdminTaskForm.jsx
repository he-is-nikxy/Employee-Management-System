import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../context/AuthProvider';

const AdminTaskForm = () => {

    const [userData, setUserData] = useContext(AuthContext)

    


    const [status, setStatus] = useState("Pending");
    const [taskTitle, setTaskTitle] = useState("");
    const [taskAssignedTo, setTaskAssignedTo] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskDate, setTaskDate] = useState("")
    const [taskCategory, setTaskCategory] = useState("");

    const [newTask, setNewTask] = useState({})
    const [knowTaskStatus, setKnowTaskStatus] = useState([]);

    // const [taskCountObj, setTaskCountObj] = useState({});
    const [taskCount, setTaskCount] = useState(0);

    
    // const taskCountObj = {};
    

    const handleSubmit = (e) => {
        e.preventDefault();



        if (taskTitle == "") {
            alert("Please Enter Task Title")
        } else if (taskDescription == "") {
            alert("Please Enter Task Description")
        } else if (taskDate == "") {
            alert("Please select Task Date")
        } else {

            setNewTask({ taskTitle, taskAssignedTo, taskDescription, taskDate, taskCategory, active: false, newTask: true, failed: false, completed: false });
    
            const data = userData;
            

            // console.log(data)
            data.forEach((elem) => {
                if (elem.firstName === taskAssignedTo) {
                    elem.tasks.push(newTask)
                    elem.taskCounts.newTask = elem.taskCounts.newTask + 1;
                    elem.taskCounts.active = elem.taskCounts.active + 1;
                    elem.taskCounts.completed = elem.taskCounts.completed;                    
                    // console.log(elem)
                }
            })
            // setUserData(data);
            console.log(data);
            

        }




        setTaskTitle("");
        setTaskAssignedTo("");
        setTaskDate("");
        setTaskCategory("");
        setTaskDescription("");

        // setStatus("Pending");

    }

    // console.log(taskCountObj);




    return (
        <>
            <div id='mainTaskForm'>
                <div id='taskFormContainer'>
                    <h2>Add Task</h2>
                    <form onSubmit={handleSubmit} id='taskForm'>
                        <div>
                            <div>
                                <h3>Task Title</h3>
                                <input value={taskTitle} onChange={(e) => setTaskTitle(e.target.value)} placeholder='Task Title' type="text" name="" id="" />
                            </div>
                            <div>
                                <h3>Date</h3>
                                <input value={taskDate} onChange={(e) => setTaskDate(e.target.value)} placeholder='Select Date' type="date" name="" id="" />
                            </div>
                            <div>
                                <h3>Assigned To</h3>
                                {/* <input value={taskAssignedTo} onChange={(e) => setTaskAssignedTo(e.target.value)} placeholder='Assigned To' type="text" name="" id="" /> */}
                                <select value={taskAssignedTo} onChange={(e) => setTaskAssignedTo(e.target.value)} name="" id="">
                                    {
                                        userData.map((e, i) => {
                                            return (
                                                <option key={i} value={e.firstName}>{e.firstName}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div>
                                <h3>Category</h3>
                                <input type="text" value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)} placeholder='Task Category' />
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Description</h3>
                                <textarea value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} placeholder='Task Description' name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div>
                                <button type="submit">Add Task</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div id='mainTaskTable'>
                <h1>Employees Table</h1>

                <table id='taskTable' >
                    <thead>
                        <tr>
                            <th>Employee Name</th>
                            <th>Active Tasks</th>
                            <th>New Tasks</th>
                            <th>Completed Tasks</th>
                            <th>Failed Tasks</th>
                        </tr>
                    </thead>
                    {
                        userData.map((e, i) => {
                            return (
                                <tbody key={i}>
                                    <tr>
                                        <td> {e.firstName} </td>
                                        <td> {e.taskCounts.active} </td>
                                        <td> {e.taskCounts.newTask} </td>
                                        <td> {e.taskCounts.completed} </td>
                                        <td> {e.taskCounts.failed} </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>

            </div>

            {userData.map((e, i) => {
                return (
                    <>
                        <div key={i} id='allTasks'>
                            <div>
                                <h3> {e.firstName} </h3>
                                <h3> {e.tasks.map(ele => ele.taskTitle + ", " )} </h3>
                                {status == "Pending" ? <h3 style={{ color: "red" }}> Status: {status == "Pending" ? "Pending" : "Completed"} </h3> : <h3 style={{ color: "green" }}> Status: {status == "Pending" ? "Pending" : "Completed"} </h3>}
                            </div>
                        </div>
                    </>
                )
            })}

        </>
    )
}

export default AdminTaskForm