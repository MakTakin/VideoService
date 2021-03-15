import React from 'react'
import styled from 'styled-components'
import FormLogin from './formLogin/formLogin';

const ModalWindow = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    > div {
        margin: 202px auto;
        width: 235px;
        height: 323px;
        border-radius: 8px;
        padding: 36px;
        background:#fff;
        box-shadow: 3px 5px 7px rgba(0,0,0,0.6);
    }
    @media (max-width: 480px) {
        > div {
            padding: 36px 0; 
        } 
    }
`

const Modal = (props) => {
    const closeModal = (e) => {
        if (e.target.id == 'close') {
            props.setLogin(null)
        }
    }

    return (
        <ModalWindow id='close' onClick={closeModal}>
            <FormLogin
                user={props.user}
                setUser={props.setUser}
                error={props.error}
                onLogin={props.onLogin}
                onEnter={props.onEnter}
            />
        </ModalWindow>
    )
}
export default Modal