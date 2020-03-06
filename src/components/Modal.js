import React from 'react';
import styled from 'styled-components'

import defaultimg from '../assets/defaultuser.png'

const ModalBox = styled('div')`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(253, 254, 255, 0.712);
  
    h3, p {
        margin: 0;
    }

    .modal-main {
        position: fixed;
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-areas: "user text";
        font-family: Globotipo Texto;
        color: #d8e6f0;
        background: #133b57;    
        width: 80%;
        height: 90%;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }

    .user {
        grid-area: "user";
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16pt;
        padding: 20px;
        border-right: solid 2px #d8e6f0;
    }

    .userimg {
        width: 100%;
        border-radius: 50%;
        border: 2px solid white;
        max-width: 200px;
        margin-bottom: 10px;
    }

    .text {
        grid-area: "text";
        font-size: 18pt;
        padding: 20px;
    }
  
    .display-block {
        display: block;
    }
  
    .display-none {
        display: none;
    }
`

function Modal(props) {
  //avatar
  const { user, text, show, onClose } = props

  const handleClose = () => {
    onClose && onClose()
  }

  if(!show){
    return null
  }

  return (
    <ModalBox onClick={() => handleClose()}>
        <div className="modal-main"> 
            <div className="user">
                <img src={defaultimg} alt={"Foto de perfil"} className="userimg"/>
                <h3>{user}</h3>
            </div>
            <div className="text">
                <p>{text}</p>
            </div>
        </div>
    </ModalBox>
  )
}

export default Modal;