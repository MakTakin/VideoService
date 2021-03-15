import React from 'react'
import styled from 'styled-components'
import Latest from './latest/latest';
import Genres from './genres/genres';

const MoviesMain = styled.div`
    display: flex;
    flex-direction: column;
    padding: 38px 0 62px 0;
`
const Movies = (props) => {
    return (
        <MoviesMain>
            <Latest tab={props.tab}/>
            <Genres tab={props.tab}/>
        </MoviesMain>
    )
}
export default Movies