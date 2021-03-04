import React from 'react'
import logotip from '../../../assets/images/logo.png'
import { LogoLink } from '../../ui/links';

const Logo = () => {
    return (
        <LogoLink to='/'>
            <img src={logotip} alt="logo"/>
        </LogoLink>
    )
}
export default Logo