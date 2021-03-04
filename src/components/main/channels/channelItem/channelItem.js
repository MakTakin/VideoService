import React from 'react'
import styled from 'styled-components'

const Channel = styled.div`
    display: flex;
    background: #F2F2F2;
    border-radius: 8px;
    padding: 20px 0;
    margin-bottom: 15px;
    
    @media (max-width: 720px) {
        flex-wrap: wrap; 
    }
`

const PictureChannel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
    
    @media (max-width: 991px) {
        width:25%;  
    }
    @media (max-width: 720px) {
        width:100%;  
    }
`

const Program = styled.div`
    @media (max-width: 720px) {
        margin-left: 10px;
    }
    
`

const ProgramHeader = styled.div`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    
`

const ProgramTiming = styled.div`
    > :not(:last-child) {
        margin-bottom: 12px;
    }
    > :first-child {
        color: #E5261E;
    }
`

const ChannelItem = (props) => {
    const Programs = props.program.map (program=> {
        return(
            <div key={program}>
                {program}
            </div>
        )
    })

    return (
        <Channel>
            <PictureChannel>
                <img src={props.picture} alt="picture"/>
            </PictureChannel>
            <Program>
                <ProgramHeader>
                    {props.name}
                </ProgramHeader>
                <ProgramTiming>
                    {Programs}
                </ProgramTiming>
            </Program>
        </Channel>
    )
}
export default ChannelItem