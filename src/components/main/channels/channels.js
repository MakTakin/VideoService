import React from 'react'
import styled from 'styled-components'
import ChannelItem from './channelItem/channelItem';

const ChannelContainer = styled.section``

const ChannelsMain = styled.ul`
    margin: 40px 0 72px 0;
    padding-right: 10px;
    height: 690px;
    overflow-y: auto;
    

    ::-webkit-scrollbar {
        background: #F2F2F2;
        border-radius: 2px;
        margin-left: 10px;
        width: 8px; 
    }
    ::-webkit-scrollbar-thumb {
        background: #BDBDBD;
        border-radius: 6px;
        border: 2px solid #F2F2F2;
    }
    scrollbar-color: #BDBDBD #F2F2F2;
    
    @media (max-width: 480px) {
        padding-right: 5px;
    }
`

const Channels = ({ tab }) => {
    const ListChannels = tab.channels.map( channel => {
        return (
            <ChannelItem
                key={channel.id}
                picture={channel.picture}
                name={channel.name}
                program={channel.program}
            />
        )
    })

    return (
        <ChannelContainer>
            <ChannelsMain>
                {ListChannels}
            </ChannelsMain>
        </ChannelContainer>
    )
}
export default Channels