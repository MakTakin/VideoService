import React from 'react'
import logoFooter from '../../assets/images/logoFooter.png'
import styled from 'styled-components'

const FooterContainer = styled.div`
    display: flex;
    padding: 25px 130px;
    color: #333333;
    background: #F2F2F2;
    
    @media (max-width: 991px) {
        padding: 25px 30px;
    }
    @media (max-width: 480px) {
        padding: 25px 10px;
    }
`

const Contacts = styled.div`
    margin-left: 40px;
`

const Site = styled.a`
    text-decoration: none;
    color: #1F4766;
`

const FooterLogo = styled.img`
    @media (max-width: 720px) {
        align-self: flex-start;
    }
`

const Footer = () => {
    return (
        <FooterContainer>
            <FooterLogo src={logoFooter} alt="logo"/>
            <Contacts>
                <div>
                    426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла Маркса, 246 (ДК «Металлург»)
                </div>
                <div>
                    +7 (3412) 93-88-61, 43-29-29
                </div>
                <Site href='https://htc-cs.ru/' target='_blank'>
                    htc-cs.ru
                </Site>
            </Contacts>
        </FooterContainer>
    )
}
export default Footer