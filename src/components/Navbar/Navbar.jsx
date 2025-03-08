import { useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
  const { login } = useSelector((state) => ({ ...state }))
  console.log(login)
  return (
    <>
    <div className="navbar">{login.user}</div>
    </>
  )
}

export default Navbar
