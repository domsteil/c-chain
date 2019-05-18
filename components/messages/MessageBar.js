import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { deflateSync } from 'zlib';


function useAsyncEndpoint(fn) {
  const [res, setRes] = useState({
    data: null,
    pending: deflateSync,
    completed: false,
    error: false,
  });
  const [req, setReq] = useState();
  
  useEffect(() => {
    if (!req) return;
    setRes({
      data: null,
      pending: true,
      completed: false,
      error: false,
    });
  axios(req)
  .then(res =>
    setRes({
      data: res.data,
      pending: false,
      error: false,
      complete: true
    }),
  )
  .catch(() =>
    setRes({
      data: null,
      pending: false,
      error: true,
      complete: true
    }),
  );
}, [req]
);
return [res, (...args) => setReq(fn(...args))];

}

const chatAPI = "http://localhost:10050/api/sendMessage?to";

function postChatEndpoint() {
  
  return useAsyncEndpoint(data => ({
  url: chatAPI,
  method: "POST",
  data
}));
}

export default function MessageBar(props) {
  const [message, setMessage] = useState("");
  const [to, setTo] = useState("");
  const [who, setWho] = useState("");
  const [newMessage, postNewMessage] = postChatEndpoint();

  const handleKeyPress = (event) => {
  if(event.key == 'Enter'|| event.keyCode == 13) {
    sendChat();
  }
}

    function sendChat() {
      postNewMessage({
        to,
        message
      });
    }

return (
    <section>
    <div className="row">
        <div className="column">
        <br/>
        <input className="message-box" value={message} onChange={e => setMessage(e.target.value)} onKeyPress={handleKeyPress} />
        </div>
        
        </div>
        <style jsx>{`

      .column {
        text-align: center;
        border-width: 1px;
        list-style: none;
        padding-bottom: 8px;
        padding-top: 8px;
        margin-right: 28px;
      }

      .to {
        width: 260px;
        padding-bottom: 8px;
        padding-top: 8px;
        border: 1px solid #d0d4d9; 
        border-radius: .375rem;
        -webkit-box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
        box-shadow: inset 0 -1px 0 0 rgba(100,121,143,0.122);
        line-height: 20px;
        min-height: auto; 
        padding-left: 0; 
        padding-right: 0;
      }

      .message-box {
        padding-bottom: 28px;
        width: 1070px ;
        overflow: auto;
        margin: 0; 
        min-height: 42px; 
        height: 38px; 
        max-height: 180px; 
        border: 2px solid rgba(134,134,134,.7);
        border-radius: .375rem;
        outline: 0;
        background: #fff;
        resize: none;
        box-shadow: none;
        color: #1d1c1d;
        -webkit-user-select: auto;
        -moz-user-select: auto;
        -ms-user-select: auto;
        user-select: auto;
        padding: 9px 30px 10px 50px;"
      }

      .login {
        color: #FFF;
      }

      .account {
        font-size: 13px;
        line-height: 1.91667;
        font-weight: 400;
        color: #3d464d;
        border: 1px solid #bdc4c9;
        padding: 3.5px 7px;
        border-radius: 4px;
        margin-top: 28px;
        margin-left: 8px;
      }

      .row {
        flex-direction: column;
        margin: -1.5rem 0;
        text-align: center;
      }

      // CSS only media query for tablet
      @media screen and (max-width: 960px) {
        .row {
          flex-direction: column;
          margin: -1.5rem 0;
        }
        .column {
          width: 10%;
          padding: 1.5rem 0;
          text-align: center;
          max-width: 100px;
        }

        .message-box {
          padding-bottom: 28px;
          width: 100px;
          overflow: auto;
          margin: 0; 
          min-height: 42px; 
          height: 38px; 
          max-height: 180px; 
          border: 2px solid rgba(134,134,134,.7);
          border-radius: .375rem;
          outline: 0;
          background: #FFFFFF;
          resize: none;
          box-shadow: none;
          color: #1d1c1d;
          -webkit-user-select: auto;
          -moz-user-select: auto;
          -ms-user-select: auto;
          user-select: auto;
          padding: 9px 30px 10px 50px;
          display: none;
        }

        
      }
    `}</style>
        </section>
)

    }
