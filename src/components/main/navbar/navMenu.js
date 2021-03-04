import React from 'react'
import styled from 'styled-components'
import { MenuLink } from '../../ui/links';

const Menu = styled.div`
    text-align: center;
`

const NavMenu = ({ changeTab, tabs }) => {
    const Tabs = tabs.map( tab => {
        return(
            <MenuLink
                key={tab.id}
                active={tab.active ? 1:0}
                to={tab.to}
                onClick={() => changeTab(tab.id)}
            >
                {tab.name}
            </MenuLink>
        )
    })
    return (
        <Menu>
            {Tabs}
        </Menu>
    )
}
export default NavMenu