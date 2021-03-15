import React from 'react'
import styled from 'styled-components'
import { HeaderMovies } from '../../../ui/headers';
import GenresItem from './genresItem/genresItem';

const ListGenres = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    > :not(:last-child) {
        margin-right: 10px;
    }
    > li {
        margin-bottom: 10px;
    }
    
    @media (max-width: 1200px) {
        justify-content: center;
        > :last-child, li {
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

const GenresContainer = styled.section``

const Genres = ({ tab }) => {
    const GenresItems = tab.genres.map( genre => {
        return (
            <GenresItem
                key={genre.id}
                name={genre.name}
                picture={genre.picture}
                color={genre.color}
                colorHover={genre.colorHover}
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