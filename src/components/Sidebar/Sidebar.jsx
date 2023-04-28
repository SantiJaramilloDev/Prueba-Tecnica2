import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logoutUserRedux } from '../../reducers/loginSlice'
import './Sidebar.css'



const Sidebar = ({ setSelectedComponent }) => {
  const dispatch = useDispatch()
  const history = useNavigate()
  const selectedRoute = (route) => {
    setSelectedComponent(route)    
  }

  const logout = () => {
    dispatch(logoutUserRedux())
    history('/login')
  }

  return (
    <>
    <div className="sidebar">
      <div className="sidebar-list">
        <div className="list hover">
          <div onClick={() => selectedRoute('home')}>Inicio</div>
        </div>
        <div className="list hover">
          <div onClick={() => selectedRoute('message')}>Mensajes</div>
        </div>
        <div className="list hover">
          <div onClick={() => logout()}>Cerrar sesión</div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Sidebar
