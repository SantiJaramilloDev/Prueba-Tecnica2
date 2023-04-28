import { useState } from "react"
import { useSelector } from 'react-redux'

import Navbar from "../../components/Navbar/Navbar"
import Sidebar from "../../components/Sidebar/Sidebar"
import Home from '../Home/Home'
import Chat from '../Chat/Chat'
import './Dashboard.css'

const Dashboard = () => {

  const [selectedComponent, setSelectedComponent] = useState('home')
  const { login } = useSelector((state) => ({ ...state }))
  console.log(login)
  return (
    <>
    <Navbar/>
    <div className="flex-container">
      <Sidebar setSelectedComponent={setSelectedComponent} />
      {
        selectedComponent === 'home' ? <Home/> : <Chat/>
      }
    </div>
    </>
  )
}

export default Dashboard
