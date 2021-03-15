import styled from 'styled-components'
import {Link} from "react-router-dom"

export const MenuLink = styled(Link)`
    font-size: 28px;
    font-weight: 500;
    margin-right: 24px;
    padding-bottom: 6px;
    border-bottom: ${props => props.active ? '3px solid #E5261E;' : 'none'};
    box-sizing: border-box;
    color: ${props => props.active ? '#E5261E' : '#333333'};
    text-decoration: none;
    outline: none;
    cursor: pointer;
`

export const LogoLink = styled(Link)`
    border: none;
    outline: none;
    cursor: pointer;
    text-decoration: none;
`

export const  FilmLink = styled(LogoLink)`
    color: #333333;
`