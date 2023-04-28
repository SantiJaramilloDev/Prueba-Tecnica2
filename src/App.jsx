import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import Login from './screens/Login/Login'
import Dashboard from './screens/Dashboard/Dashboard'
import 'react-toastify/dist/ReactToastify.css'

function App() { 
  const { login } = useSelector((state) => ({ ...state }))

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {
            login.isLogin 
              ? <Route path="/dashboard" element={<Dashboard />} /> 
              : <Route path="/login" element={<Login/>}/>
          }
          <Route path="/login" element={<Login />} />
          <Route path='/dashboard' element={<Login />}/>
          <Route path="/" element={<Login />} />
          <Route path='*' element={<h1>LA RUTA INGRESADA NO ES CORRECTA, VERIFIQUE LA INFORMACION</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
