import { useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
  const { login } = useSelector((state) => ({ ...state }))
  return (
    <>
    <div className="navbar">{login.user}</div>
    </>
  )
}

export default Navbar
