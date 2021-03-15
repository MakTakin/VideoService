import React, { useState } from 'react'
import { mockTabs } from '../../constants/mockTabs';
import { Redirect, Route, Switch } from 'react-router-dom';
import styled from 'styled-components'
import NavMenu from './navbar/navMenu';
import Movies from './movies/movies';
import Channels from './channels/channels';

const MainContainer = styled.main`
    padding: 0 130px;
    
    @media (max-width: 991px) {
        padding: 0 30px;
    }
    @media (max-width: 480px) {
        padding: 0 10px;
    }
`

const Main = () => {
    const [tabs, setTabs] = useState(mockTabs)
    const changeTab = (id) => {
        const changeTabs = [...tabs]
        changeTabs.forEach(tab => tab.id == id ? tab.active = true : tab.active = false)
        setTabs(changeTabs)
    }

    return (
        <MainContainer>
            <NavMenu
                changeTab={changeTab}
                tabs={tabs}
            />
            <Switch>
                <Route path='/movies'
                        render={() => <Movies
                        tab={tabs[0]}/>
                        }
                />
                <Route path='/channels'
                        render={() => <Channels
                        tab={tabs[1]}/>
                        }
                />
                <Redirect to='/movies'/>
            </Switch>
        </MainContainer>
    )
}
export default Main