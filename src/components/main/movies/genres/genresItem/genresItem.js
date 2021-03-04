import React from 'react'
import styled from 'styled-components'

const Genre = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 208px;
    align-items: center;
    justify-content: flex-end;
    border-radius: 6px;
    box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
    background: ${props => props.color};
    opacity: 0.8;
    cursor:pointer;
    color: #fff;
    &:hover {
        opacity: 1;
    }
`

const GenrePicture = styled.div`
    font-size: 35px;
    margin-bottom: 32px;
`
const GenreName = styled.div`
    font-size: 20px;
    margin-bottom: 24px
`

const GenresItem = (props) => {
    return (
        <Genre
            color={props.color}
        >
            <GenrePicture>
                {props.picture}
            </GenrePicture>
            <GenreName>
                {props.name}
            </GenreName>

        </Genre>
    )
}
export default GenresItem