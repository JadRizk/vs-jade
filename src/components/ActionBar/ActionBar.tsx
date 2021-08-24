import styled, { css } from 'styled-components';
import Link from 'next/link';
import FilesIcon from '@assets/icons/FilesIcon';
import GithubIcon from '@assets/icons/GithubIcon';

export const ActionBar: React.FC = () => {
    return (
        <Wrapper>
            <TopItems>
                <Link href="/">
                    <ActionIconWrapper isActive>
                        <ActionIcon>
                            <FilesIcon fill={'rgb(225, 228, 232)'} />
                        </ActionIcon>
                    </ActionIconWrapper>
                </Link>
                <Link href="/github">
                    <ActionIconWrapper>
                        <ActionIcon>
                            <GithubIcon fill={'rgb(106, 115, 125)'} />
                        </ActionIcon>
                    </ActionIconWrapper>
                </Link>
            </TopItems>
        </Wrapper>
    );
};

const Wrapper = styled.aside`
    ${({ theme: { colors } }) =>
        css`
            background: ${colors.sidebarBg};
        `}
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    width: 4vw;
    min-width: 40px;
    height: calc(100vh - 58px);

    @media screen and (max-width: 900px) {
        width: 8vw;
    }

    @media screen and (max-width: 600px) {
        width: 10vw;
    }
`;

const TopItems = styled.div``;

const ActionIconWrapper = styled.div<{ isActive: boolean }>`
    cursor: pointer;
    width: 100%;

    &:hover {
        ${({ theme: { colors } }) =>
            css`
                background: ${colors.sidebarHoverBg};
            `}
    }

    ${({ theme: { colors }, isActive }) =>
        css`
            ${isActive ? `border-left: 2px solid ${colors.accentColor};` : ``}
        `}
`;

const ActionIcon = styled.div`
    * {
        height: 48px;
        width: 48px;
        padding: 0.65rem 0;
        display: block;
        margin: 0 auto;

        @media screen and (max-width: 600px) {
            height: 36px;
            width: 36px;
            padding: 0.6rem;
        }

        @media screen and (max-width: 900px) {
            height: 48px;
            width: 48px;
            padding: 0.6rem;
        }
    }
`;
