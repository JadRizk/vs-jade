import React from 'react';
import styled from 'styled-components';

const ThemeConfig: React.FC = () => {
    return (
        <>
            <h2>Manage Themes</h2>
            <Wrapper>Hello</Wrapper>
        </>
    );
};
export default ThemeConfig;

const Wrapper = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin: 1rem 0;
`;
