import styled from 'styled-components'
import {Link} from "react-router-dom"

export const MenuLink = styled(Link)`
    font-size: 28px;
    font-weight: 500;
    margin-right: 24px;
    box-sizing: border-box;
    text-decoration: ${props => props.active ? 'underline' : 'none'};
    color: ${props => props.active ? '#E5261E' : '#333333'};
    border: none;
    outline: none;
    cursor: pointer;
`

export const LogoLink = styled(Link)`
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
`