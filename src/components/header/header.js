import React from 'react'
import styled from 'styled-components'
import Search from './search/search';
import Login from './login/login';
import Logo from './logo/logo';

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 32px 130px 48px 130px;
    
    @media (max-width: 991px) {
        flex-wrap: wrap;
        padding: 32px 30px 48px 30px;
    }
    @media (max-width: 720px) {
        > :nth-child(2) { 
            order: 1; 
        }
        > :nth-child(1) { 
            flex: 50%;
            margin-bottom: 20px;
        }
        > :nth-child(3) {
            margin-bottom: 20px;
        }
    }
    @media (max-width: 480px) {
        padding: 32px 10px 48px 10px; 
    }
`

const Header = (props) => {
    return (
        <HeaderContainer>
            <Logo/>
            <Search/>
            <Login
                user={props.user}
                error={props.error}
                authorized={props.authorized}
                setLogin={props.setLogin}
                onExit={props.onExit}
                changeLogin={props.changeLogin}
                setChangeLogin={props.setChangeLogin}
                onLogin={props.onLogin}
                closeChangeLogin={props.closeChangeLogin}
            />
        </HeaderContainer>
    )
}
export default Header