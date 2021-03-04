import React from 'react'
import styled from 'styled-components'
import { HeaderMovies } from '../../../ui/headers';
import GenresItem from './genresItem/genresItem';

const ListGenres = styled.div`
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

const GenresContainer = styled.div``

const Genres = ({ tab }) => {
    const GenresItems = tab.genres.map( genre => {
        return (
            <GenresItem
                key={genre.id}
                name={genre.name}
                picture={genre.picture}
                color={genre.color}
            />
        )
    })

    return (
        <GenresContainer>
            <HeaderMovies>Жанры</HeaderMovies>
            <ListGenres>
                {GenresItems}
            </ListGenres>
        </GenresContainer>
    )
}
export default Genres