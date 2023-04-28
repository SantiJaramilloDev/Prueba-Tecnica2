import Message from '../../Forms/Message/Message'

export default function ChatMessage ({chatMessages}) {
  const agentAvatar = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_01.jpg'
  const customerAvatar = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_03.jpg'
  return (
    <>
      <div className="chat">
      <div className="chat-header">
        <img className="img-header" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_03.jpg"
          alt="avatar" />
        <div className="chat-with">Chat de cliente</div>
      </div>
      <div className="chat-history">
        {
          chatMessages.map((chatMessage, index) => {
            const avatar = chatMessage.sender === 'customer' ? customerAvatar : agentAvatar
            return (
              <>
                <Message key={index} message={chatMessage.message} sender={chatMessage.sender} avatar={avatar} />
                <hr />
              </>
            )
          })
        }
      </div>
    </div>
    </>
  )
}