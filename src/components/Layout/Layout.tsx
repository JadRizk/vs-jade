import { WindowFooter, WindowBar, OsBar, ActionBar, ContentExplorer } from './components';
import styled, { css } from 'styled-components';

const Layout: React.FC = ({ children }) => {
    return (
        <>
            <OsBar />
            <WindowBar />
            <Container>
                <ActionBar />
                <ContentExplorer />
                <FullWidth>
                    <Main>{children}</Main>
                </FullWidth>
            </Container>
            <WindowFooter />
        </>
    );
};

export default Layout;

const Container = styled.div`
    display: flex;
    ${({ theme: { colors } }) =>
        css`
            background: ${colors.background};
        `}
`;

const FullWidth = styled.div`
    width: 100%;
`;

const Main = styled.main`
    ${({ theme: { colors } }) =>
        css`
            color: ${colors.textColor};
            scrollbar-color: ${colors.accentColor};
        `}
    padding: 2rem;
    font-family: 'JetBrains Mono', monospace;
    flex: 1;
    height: 85vh;
    overflow-y: auto;

    scrollbar-width: 10px;

    &:-webkit-scrollbar {
        width: 15px;
    }

    &:-webkit-scrollbar-track {
        ${({ theme: { colors } }) =>
            css`
                background: ${colors.scrollbarTrackBg};
            `};
        border-left: 1px solid #1e1f29;
    }

    &:-webkit-scrollbar-thumb {
        ${({ theme: { colors } }) =>
            css`
                background: ${colors.scrollbarThumbBg};
            `};
        border-left: 1px solid #1e1f29;
    }

    @media screen and (max-width: 600px) {
        padding: 2rem 1rem;
    }
`;
