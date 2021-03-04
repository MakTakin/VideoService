import React from 'react'
import styled from 'styled-components'
import { HeaderMovies } from '../../../ui/headers';
import LatestItem from './latestItem/latestItem';

const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > :not(:last-child) {
        margin-right: 10px;
    }
    div {
        margin-bottom: 10px;
    }
    
    @media (max-width: 1200px) {
        justify-content: center;
        div {
            margin-bottom: 20px;
            margin-right: 10px;
        }
    }
    @media (max-width: 480px) {
        > :not(:last-child), div {
            margin-right: 0;
        }
    }
`

const MoviesContainer = styled.div`
    margin-bottom: 22px;
`

const Latest = ({ tab }) => {
    const LatestItems = tab.movies.map( movie => {
        return (
            <LatestItem
                key={movie.id}
                name={movie.name}
                picture={movie.picture}
                description={movie.description}
            />
        )
    })

    return (
        <MoviesContainer>
            <HeaderMovies>🔥 Новинки</HeaderMovies>
            <Movies>
                {LatestItems}
            </Movies>
        </MoviesContainer>
    )
}
export default Latest