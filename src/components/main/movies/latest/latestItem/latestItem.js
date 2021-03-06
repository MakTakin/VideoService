import React from 'react'
import styled from 'styled-components'
import { FilmLink } from '../../../../ui/links';

const Movie = styled.li`
    width: 280px;
`

const MovieDescription = styled.div`
    display: none;
    position: absolute;
    background: rgb(51 51 51 / 80%);
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 16px;
    line-height: 145%;
    padding: 16px;
    color: #F2F2F2;
    border-radius: 8px;
    justify-content: center;
`

const MoviePicture = styled.div`
    background: url(${props => props.picture});
    height: 370px;
    border-radius: 5px;
    margin-bottom: 15px;
    position: relative;
    cursor: pointer;
    
    &:hover {
        ${MovieDescription} {
            display: flex;
        }
    }
`

const LatestItem = (props) => {
    return (
        <Movie>
            <FilmLink to='#'>
                <MoviePicture picture={props.picture}>
                    <MovieDescription>
                        {props.description}
                    </MovieDescription>
                </MoviePicture>
                {props.name}
            </FilmLink>
        </Movie>
    )
}
export default LatestItem