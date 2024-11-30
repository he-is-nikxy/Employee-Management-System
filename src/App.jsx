
import './App.css'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { setLocalStorage } from './utils/localStorage'
import { getLocalStorage } from './utils/localStorage'

import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);

  const [userData, setUserData] = useContext(AuthContext)


  useEffect(() => {
    if (userData) {
      const loggedInUser = localStorage.getItem("loggedInUser")
      if (loggedInUser) {
        setUser(JSON.parse(loggedInUser).role)
        setLoggedInUserData(JSON.parse(loggedInUser).data)
      } else {
        setUser(null)
      }
    }
  }, [userData]);


  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("loggedInUser")
  //   if (loggedInUser) {
  //     setUser(JSON.parse(loggedInUser).role)
  //     setLoggedInUserData(JSON.parse(loggedInUser).data)
  //   }

  // },[])


  const handleLogin = (email, password) => {
    if (email == 'admin@admin.com' && password == '123') {
      setUser("admin")
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
    } else if (userData) {
      const employee = userData.find((e) => e.email == email && e.password == password)
      if (employee) {
        setUser("employee")
        setLoggedInUserData(employee)
        localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
      } else {
        alert("Invalid Credentials");
      }
    } else {
      alert("Invalid Credentials");
    }
  }


  // const handleLogin = (email, password) => {
  //   if (userData && userData.admin.find((e) => e.email === email && e.password === password)) {
  //     setUser("admin")
  //     localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }))
  //   } else if (userData) {
  //     const employee = userData.employees.find((e) => e.email == email && e.password == password)
  //     if (employee) {
  //       setUser("employee")
  //       setLoggedInUserData(employee)
  //       localStorage.setItem("loggedInUser", JSON.stringify({ role: "employee", data: employee }))
  //     } else {
  //       alert("Invalid Credentials");
  //     }
  //   } else {
  //     alert("Invalid Credentials");
  //   }
  // }

 

  return (
    <div>
      {/* {!user ? <Login handleLogin={handleLogin} /> : ""} */}
      {
        user == "employee" ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : user == "admin" ? <AdminDashboard changeUser={setUser} /> : <Login handleLogin={handleLogin} />
      }

      {/* <Login handleLogin={handleLogin} /> */}
      {/* <EmployeeDashboard /> */}
      {/* <AdminDashboard /> */}
    </div>
  )
}

export default App