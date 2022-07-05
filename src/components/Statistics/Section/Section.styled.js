import styled from "styled-components";

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: ${p => p.theme.space[4]};
    padding: 20px;
    border-radius: 3rem;
`

export const SectionTitle = styled.h2`
    margin: ${p => p.theme.space[8]};
    text-align: center;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: 1.8rem;
    letter-spacing: 1px;
`