import React from 'react';
import styled from 'styled-components'

import { FadeIn, FadeOut } from 'animate-css-styled-components'
import defaultimg from '../assets/defaultuser.png'

const ModalBox = styled.div`
    
    position: fixed;
    top: 0;
    left: 0;
    width: calc(100% - 100px);
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
        left: calc(50% - 50px);
        transform: translate(-50%,-50%);
        transition: linear 1s;
    }

    .user {
        grid-area: "user";
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 16pt;
        padding: 20px;
        border-right: solid 2px #d8e6f0;
        text-align: center;
    }

    .userimg {
        max-width: 100px;
        border-radius: 50%;
        border: 2px solid white;
        margin-bottom: 10px;

        @media(min-width: 900px){
            max-width: 200px;
        }
    }

    .text {
        grid-area: "text";
        font-size: 30pt;
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

    if (!show) {
        return null
    }

    console.log('foi!')

    return (
        <FadeIn duration="0.3s" delay="0s">
            <ModalBox>
                <div className="modal-main" onClick={() => handleClose()}>
                    <div className="user">
                        <img src={defaultimg} alt={"Foto de perfil"} className="userimg" />
                        <h3>{user}</h3>
                    </div>
                    <div className="text">
                        <p>{text}</p>
                    </div>
                </div>
            </ModalBox>
        </FadeIn>
    )
}

export default Modal;