import React from 'react'
import styled from 'styled-components'
import { FilmLink } from '../../../../ui/links';

const Genre = styled.li`
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 208px;
    align-items: center;
    justify-content: flex-end;
    border-radius: 6px;
    box-shadow: inset 0px 0px 16px rgba(0, 0, 0, 0.15);
    background: ${props => props.color};
    cursor:pointer;
    &:hover {
        background: ${props => props.colorHover};
    }
`

const GenrePicture = styled.div`
    font-size: 35px;
    margin-bottom: 32px;
`
const GenreName = styled.div`
    font-size: 20px;
    margin-bottom: 24px;
    color: #fff;
`

const GenresItem = (props) => {
    return (
        <FilmLink to='#'>
            <Genre
                color={props.color}
                colorHover={props.colorHover}
            >

                <GenrePicture>
                    {props.picture}
                </GenrePicture>
                <GenreName>
                    {props.name}
                </GenreName>

            </Genre>
        </FilmLink>
    )
}
export default GenresItem