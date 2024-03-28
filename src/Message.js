import { selectHMSMessages, selectLocalPeer, useHMSStore } from '@100mslive/react-sdk'
import { useEffect, useState } from 'react';

function Message({}) {
  const [messagess, setmessages] = useState([])
  const localPeer = useHMSStore(selectLocalPeer)
  const messages = useHMSStore(selectHMSMessages);
useEffect(() => {
    setmessages([...messages])
}, [messages])

  return (
    <div>
    {messages.map((message, index) => (
        <div 
            key={index} 
            className={`message ${message.senderUserId === localPeer.customerUserId ? 'myMessage' : ''}`}
        >
            <span>{message.senderName}</span>
            <p>{message.message}</p>
        </div>
    ))}
</div>
  )
}

export default Message