import styled from "styled-components";

export const NotificationMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: ${p => p.theme.fontWeights.normal};
    font-size: ${p => p.theme.space[16]};
    color: ${p => p.theme.colors.shadow};
`;


export const NotificationText = styled.p`
    margin-bottom: ${p => p.theme.space[8]};
`