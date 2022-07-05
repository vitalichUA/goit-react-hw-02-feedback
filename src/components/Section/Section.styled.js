import styled from "styled-components";

export const SectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: ${p => p.theme.space[4]};
    padding: 20px;
`

export const SectionTitle = styled.h2`
    margin: ${p => p.theme.space[8]};
    text-align: center;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.fontSizes.l};
`