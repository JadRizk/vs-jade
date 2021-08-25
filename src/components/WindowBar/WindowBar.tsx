import styled, { css } from 'styled-components';

export const WindowBar: React.FC = () => {
    return (
        <SectionWrapper>
            <WindowButtons>
                <Minimize />
                <Maximize />
                <Close />
            </WindowButtons>
            <WindowTitle>Jad M. Rizk</WindowTitle>
        </SectionWrapper>
    );
};

export const SectionWrapper = styled.section`
    ${({ theme: { colors } }) =>
        css`
            background: ${colors.titlebarBg};
        `}
    height: 30px;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 0.85rem;
    border-bottom: 1px solid #191d20;
`;

const WindowTitle = styled.p`
    flex: 1;
    text-align: center;

    @media screen and (max-width: 900px) {
        flex: 4;
    }
`;

const WindowButtons = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;

    * {
        margin-left: 0.5rem;
        height: 13px;
        width: 13px;
        border-radius: 50%;
        cursor: pointer;
    }
`;

const Minimize = styled.span`
    background: #f1fa8c;
`;

const Maximize = styled.span`
    background: #50fa7b;
`;

const Close = styled.span`
    background: #ff5555;
    margin-right: auto;
`;
