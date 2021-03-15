import React from 'react'
import styled from 'styled-components'
import { HeaderMovies } from '../../../ui/headers';
import LatestItem from './latestItem/latestItem';

const Movies = styled.ul`
    display: flex;
    flex-wrap: wrap;
    font-size: 20px;
    justify-content: space-between;
    list-style: none;
    > :not(:last-child) {
        margin-right: 10px;
    }
    > li {
        margin-bottom: 10px;
    }
    
    @media (max-width: 1200px) {
        justify-content: center;
        li, :last-child {
            margin-bottom: 20px;
            margin-right: 10px;
        }
    }
    @media (max-width: 480px) {
        > li {
            margin-right: 0;
        }
    }
`

const MoviesContainer = styled.section`
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