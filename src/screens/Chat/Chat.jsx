import { useState, useEffect } from 'react'

import ChatButton from '../../components/Buttons/ChatButton/ChatButton'
import ChatMessage from '../../components/Forms/ChatMessage/ChatMessage'
import { getChats } from '../../actions/conexion_api'
import './Chat.css'

const Chat = () => {
  const [chats, setChats] = useState([])
  const getChatsApi = async () => {
    const chats = await getChats()
    setChats(chats.data)
  }

  useEffect(() => {
    getChatsApi()
  }, [])

  return (
    <>
      <div className='main'>
        <ChatButton />
        <ChatMessage chatMessages={chats} />
      </div>
    </>
  )
}


export default Chat