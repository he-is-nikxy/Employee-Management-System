import React from 'react'
import AcceptTask from '../../TaskList/AcceptTask'
import CompleteTask from '../../TaskList/CompleteTask'
import FailedTask from '../../TaskList/FailedTask'
import NewTask from '../../TaskList/NewTask'

const Tasks = ({ data }) => {
   
  return (
    <>
      <div id='tasks'>
        {
          data.tasks.map((e) => {
            if (e.active) {
              return (
                <div key={e.id}>
                  <h3>{e.title}</h3>
                  <h3>{e.status}</h3>
                  <AcceptTask taskId={e.id} data={e} />
                </div>
              )
            }
            if (e.newTask) {
              return (
                <div key={e.id}>
                  <h3>{e.title}</h3>
                  <h3>{e.status}</h3>
                  <NewTask taskId={e.id} data={e} />
                </div>
              )
            }
            if (e.completed) {
              return (
                <div key={e.id}>
                  <h3>{e.title}</h3>
                  <h3>{e.status}</h3>
                  <CompleteTask taskId={e.id} data={e} />
                </div>
              )
            }
            if (e.failed) {
              return (
                <div key={e.id}>
                  <h3>{e.title}</h3>
                  <h3>{e.status}</h3>
                  <FailedTask taskId={e.id} data={e} />
                </div>
              )
            }
          })
        }

      </div>
    </>
  )
}

export default Tasks