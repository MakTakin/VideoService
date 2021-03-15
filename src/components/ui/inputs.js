import styled from 'styled-components'
import checkbox from '../../assets/images/checkbox.png'

export const SearchInput = styled.input`
    font-size: 16px;
    font-family: 'Rubik';
    border: none;
    border-bottom: 1px solid #333333;
    padding-bottom: 6px;
    outline: none;
`

export const FormInput = styled(SearchInput)`
    margin-bottom: 22px;
`

export const LoginInput = styled(SearchInput)`
    border-bottom: ${props => props.error ? '1px solid red' : '1px solid #333333'};
    ::placeholder {
        color: red;
    }
`

export const CheckBox = styled.div`
    
    width: 100%;
    > input {
        display:none;
    }
    > input + label {
        display: flex;
        align-items: flex-end;
        position: relative;
        padding-left: 25px;
        cursor: pointer;
        &::before {
            content: '';
            position: absolute;
            left:0; 
            top: 1px;
            width: 14px; 
            height: 14px;
            border: 1px solid #333333;
            border-radius: 4px; 
        }
        &::after {
            content: url(${checkbox});
            position: absolute;
            top: -1px;
            left: 2px;
            font-size: 14px;
            color: #E5261E;
            transition: all .2s;
        }
    }
    
    > input:not(:checked) + label {
        &::after {
            opacity: 0; 
            transform: scale(0); 
        }
    }
    > input:disabled:not(:checked) + label {
        &::before {
            box-shadow: none;
            border-color: #bbb;
            background-color: #ddd;
        }
    }
    > input:checked + label {
        &::after {
            opacity: 1; 
            transform: scale(1); 
        }
    }
    > input:disabled:checked + label {
        &::after {
            color: #999;
        }
    }
    > input:disabled + label {
        color: #aaa;
    }
`;