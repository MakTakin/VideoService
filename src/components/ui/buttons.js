import styled from 'styled-components'

export const SearchButton = styled.button`
    color: #E5261E;
    cursor: pointer;
    background: #fff;
    padding: 0 0 6px 0;
    border: none;
    outline: none;
    font-size: 16px;
    font-family: 'Rubik';
    font-weight: 500;
    
`

export const LoginButton = styled(SearchButton)`
    padding: 10px 32px;
    border-radius: 4px;
    background: #E5261E;
    color: #fff;
    align-self: center;

    &:hover {
        background: #CC221B;
    }
`

export const ExitButton = styled(SearchButton)``

export const NameButton = styled(SearchButton)`
    color: #333333;
    
    &:hover {
        text-decoration: underline;
    }
`

