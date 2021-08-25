import styled, { css } from 'styled-components';
import GitCompareIcon from '@assets/icons/GitCompareIcon';
import ErrorIcon from '@assets/icons/ErrorIcon';
import WarningIcon from '@assets/icons/WarningIcon';
import VercelIcon from '@assets/icons/VercelIcon';
import CheckIcon from '@assets/icons/CheckIcon';

export const WindowFooter: React.FC = () => {
    return (
        <Footer>
            <Stack>
                <FooterSection>
                    <GitCompare />
                    <p>main</p>
                </FooterSection>
                <FooterSection>
                    <StyledErrorIcon />
                    <p>0</p>
                    &nbsp;&nbsp;
                    <StyledWarningIcon />
                    <p>0</p>
                </FooterSection>
            </Stack>
            <Stack>
                <FooterSection>
                    <StyledVercelIcon />
                    <p>Powered by Next.js</p>
                </FooterSection>
                <FooterSection>
                    <StyledCheckIcon />
                    <p>Prettier</p>
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

const StyledErrorIcon = styled(ErrorIcon)`
    margin-right: 5px;
`;

const StyledWarningIcon = styled(WarningIcon)`
    margin-right: 5px;
`;

const StyledVercelIcon = styled(VercelIcon)`
    margin-right: 5px;
`;

const StyledCheckIcon = styled(CheckIcon)`
    margin-right: 5px;
`;
