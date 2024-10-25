import React from 'react'
import { useNavigate } from "react-router-dom"
import { logout } from '../endpoints/api'

function Main() {

    const nav = useNavigate();

    const handleLogout = async() => {
        const success = await logout();
        nav('/login')
        
    }
  return (
    <div>
            <h1>Hello</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
  )
}

export default Main