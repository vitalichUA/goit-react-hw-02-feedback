import styled from "styled-components";

export const List = styled.ul`
display: flex;
gap: 10px;
list-style: none;
`

export const Button = styled.button`
    width: 70px;
    height: 40px;
    margin: 5px 0;
    border: none;
    cursor: pointer;

    :hover {
        background-color: ${p => p.theme.colors.secondary};
    }
`