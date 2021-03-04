import React from 'react'
import { LoginInput } from '../../../ui/inputs';

const ChangeLogin = (props) => {
    return (
        <LoginInput
            value={props.login}
            name='login'
            onChange={(e) => props.onLogin(e)}
            onBlur={() => props.closeChangeLogin()}
            error={props.error}
            placeholder={props.error}
        />
    )
}
export default ChangeLogin