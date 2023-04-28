import axios from 'axios'
import { toast } from 'react-toastify'

export async function login(user, password) {
  try {
    const data = {
      user,
      password
    }
    const res = await axios.post('https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing', data)
    return res
  } catch(error) {
    console.log('algo salio mal')
    toast.error('Credenciales incorrectas')
  }
}

export async function getChats() {
  try {
    const url = 'https://pbakxq15qi.execute-api.us-west-2.amazonaws.com/testing' + '?user=admin&password=admin'
    const res = await axios.get(url)
    return res
  } catch(error) {
    console.log('algo salio mal')
    toast.error('No se lograron obtener los chats')
  }
}