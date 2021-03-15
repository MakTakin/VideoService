import React from 'react'
import styled from 'styled-components'
import { FormInput, CheckBox } from '../../ui/inputs';
import { LoginButton } from '../../ui/buttons';

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const FormHeader = styled.div`
    font-size: 28px;
    font-weight: 500;
    align-self: center;
    margin-bottom: 24px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex: 1;
    > :last-child {
        margin-top: auto;
    }
`
const Error = styled.div`
    color: red;
    align-self: center;
    margin-bottom: 24px;
`


const FormLogin = (props) => {
    return (
        <FormContainer>
            <FormHeader>Вход</FormHeader>
            { props.error ?
                <Error>
                    {props.error}
                </Error> :
                null
            }
            <Form onSubmit={(e) => props.onEnter(e)}>
                <FormInput
                    value={props.user.login}
                    name='login'
                    placeholder='Логин'
                    onChange={(e) => props.onLogin(e)}
                />
                <FormInput
                    type="password"
                    value={props.user.password}
                    name='password'
                    placeholder='Пароль'
                    onChange={(e) => props.onLogin(e)}
                />
                <CheckBox>
                    <input
                        type="checkbox"
                        name="saved"
                        id='save'
                        checked={props.user.saved}
                        onChange={(e) => props.onLogin(e)}
                    />
                    <label
                        htmlFor='save'
                    >Запомнить</label>
                </CheckBox>
                <LoginButton type='submit'>Войти</LoginButton>
            </Form>
        </FormContainer>
    )
}
export default FormLogin