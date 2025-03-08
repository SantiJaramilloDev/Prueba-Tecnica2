import ChatButton from '../../components/Buttons/ChatButton/ChatButton';
import ChatMessage from '../../components/Forms/ChatMessage/ChatMessage';
import './Chat.css';

const Chat = () => {
  const chats = [
    { id: 1, role: 'agent', user: 'Agente', message: '¡Bienvenido al chat! ¿En qué puedo ayudarte hoy?' },
    { id: 2, role: 'user', user: 'Cliente', message: 'Hola, tengo una pregunta sobre mi cuenta.' },
    { id: 3, role: 'agent', user: 'Agente', message: '¡Claro! Dime, ¿cuál es tu consulta?' },
    { id: 4, role: 'user', user: 'Cliente', message: 'No puedo acceder, parece que olvidé mi contraseña.' },
    { id: 5, role: 'agent', user: 'Agente', message: 'Entiendo. ¿Has intentado restablecerla desde la opción "Olvidé mi contraseña"?' },
    { id: 6, role: 'user', user: 'Cliente', message: 'Sí, pero no recibí el correo de recuperación.' },
    { id: 7, role: 'agent', user: 'Agente', message: 'Revisa tu carpeta de spam. A veces, los correos pueden llegar allí.' },
    { id: 8, role: 'user', user: 'Cliente', message: 'Voy a revisarlo. ¡Gracias!' },
    { id: 9, role: 'agent', user: 'Agente', message: 'De nada, avísame si necesitas más ayuda.' },
  ];

  return (
    <div className='main'>
      <ChatButton />
      <ChatMessage chatMessages={chats} />
    </div>
  );
};

export default Chat;