import React from 'react'
import HeaderAdmin from './AdminComponents/HeaderAdmin'
import './AdminDashboard';
import AdminTaskForm from './AdminComponents/AdminTaskForm';
import './AdminDashboard.css'
import AllTasksAssigned from './AdminComponents/AllTasksAssigned';

const AdminDashboard = (props) => {

    return (
        <>
            <div id='main'>
                <HeaderAdmin changeUser={props.changeUser} />
                <AdminTaskForm />
                {/* <AllTasksAssigned /> */}
            </div>
        </>
    )
}

export default AdminDashboard