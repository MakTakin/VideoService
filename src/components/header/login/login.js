import React from 'react'
import styled from 'styled-components'
import ChangeLogin from './changeLogin/changeLogin';
import { ExitButton, LoginButton, NameButton } from '../../ui/buttons';

const Authorized = styled.div`
    display: flex;
    > :last-child {
        margin-left: 16px;
    }
`

const Login = (props) => {
    return (
        <>
        { props.authorized ?
            <Authorized>
                { props.changeLogin ?
                    <ChangeLogin
                        login={props.user.login}
                        error={props.error}
                        onLogin={props.onLogin}
                        closeChangeLogin={props.closeChangeLogin}
                    /> :
                    <NameButton onClick={() => props.setChangeLogin(true)}>
                        {props.user.login}
                    </NameButton>

                }
                <ExitButton onClick={() => props.onExit()}>
                    Выйти
                </ExitButton>
            </Authorized> :
            <LoginButton onClick={() => props.setLogin(true)}>
                Войти
            </LoginButton>
        }
        </>
    )
}
export default Login