import React from 'react'
import styled from 'styled-components'
import { SearchInput } from '../../ui/inputs';
import { SearchButton } from '../../ui/buttons';

const SearchDiv = styled.div`
    display: flex;
    align-items: center;
    width: 402px;
    > :nth-child(1) {
        margin-right: 32px;
        flex: 1;
    };
    
    @media (max-width: 991px) {
        width: auto;
    }
`

const Search = () => {
    return (
        <SearchDiv>
            <SearchInput placeholder='Поиск...'/>
            <SearchButton>Найти</SearchButton>
        </SearchDiv>
    )
}
export default Search