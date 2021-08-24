import { ActionBar } from '@components/ActionBar/ActionBar';
import { WindowFooter, WindowBar, OsBar } from '@components';
import styled, { css } from 'styled-components';

const Layout: React.FC = () => {
    return (
        <>
            <OsBar />
            <WindowBar />
            <Main>
                <ActionBar />
            </Main>
            <WindowFooter />
        </>
    );
};

export default Layout;

const Main = styled.div`
    display: flex;
    ${({ theme: { colors } }) =>
        css`
            background: ${colors.background};
        `}
`;
