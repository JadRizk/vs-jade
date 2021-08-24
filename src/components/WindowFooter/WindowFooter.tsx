import styled, { css } from 'styled-components';
import GitCompareIcon from '@assets/icons/GitCompareIcon';
// import WarningIcon from "@assets/icons/WarningIcon";

export const WindowFooter: React.FC = () => {
    return (
        <Footer>
            <Stack>
                <FooterSection>
                    <GitCompare />
                    <p>main</p>
                </FooterSection>
            </Stack>
        </Footer>
    );
};

const Footer = styled.footer`
    ${({ theme: { colors } }) =>
        css`
            background: ${colors.bottombarBg};
            border-top: 1px solid ${colors.bottombarBorder};
        `}

    height: 25px;
    color: rgb(225, 228, 232);
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.85rem;
`;

const Stack = styled.div`
    display: flex;
    align-items: center;
`;

const FooterSection = styled.div`
    display: flex;
    margin-right: 0.75rem;
    height: 24px;
    align-items: center;
    padding: 0 0.2rem;
    cursor: pointer;
    font-family: 'Source Sans Pro', sans-serif;

    :hover {
        ${({ theme: { colors } }) =>
            css`
                background: ${colors.bottombarHoverBg};
            `}
    }
`;

const GitCompare = styled(GitCompareIcon)`
    margin-right: 5px;
`;
