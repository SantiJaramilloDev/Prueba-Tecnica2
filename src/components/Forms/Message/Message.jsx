export default function Message({message, sender, avatar}) {
  const send = sender === 'customer' ? 'Cliente' : 'Agente'
  return (
    <>
      <div className="chat-message">
        <img src={avatar} alt="avatar" />
        <div className="chat-message-content">
          <h5>{send}</h5>
          <p>{message}</p>
        </div>
      </div>
    </>
  )
}