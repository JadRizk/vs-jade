import React from 'react';
import styled, { css } from 'styled-components';
import { Avatar } from '@components';

const Home: React.FC = () => {
    return (
        <Wrapper>
            <ResponsiveContent>
                <Avatar imageUrl={'/img/ToyFaceImg.png'} size={'lg'} name="profile" />
                <StyledName>Jad Rizk</StyledName>
            </ResponsiveContent>
        </Wrapper>
    );
};
export default Home;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 75vh;

    ${({ theme: { colors } }) =>
        css`
            color: ${colors.accentColor};
        `};
`;

const ResponsiveContent = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    /* 4K Screens */
    @media screen and (min-width: 2000px) {
        .content {
            padding: 0 3rem;
        }
    }
`;

const StyledName = styled.h1`
    color: #eee;
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 0.5rem;

    text-align: center;
`;
