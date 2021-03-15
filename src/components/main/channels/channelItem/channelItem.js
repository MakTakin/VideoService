import React from 'react'
import styled from 'styled-components'

const Channel = styled.li`
    display: flex;
    background: #F2F2F2;
    border-radius: 8px;
    padding: 20px 0;
    margin-bottom: 19px;
    
    &:last-child {
        margin-bottom: 0;
    }
    
    @media (max-width: 720px) {
        flex-wrap: wrap; 
    }
`

const PictureChannel = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 34.5%;
    
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

const ProgramHeader = styled.h2`
    font-size: 20px;
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