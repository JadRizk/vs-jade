import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import Link from 'next/link';
import FilesIcon from '@assets/icons/FilesIcon';
// import GithubIcon from '@assets/icons/GithubIcon';
import SettingsIcon from '@assets/icons/SettingsIcon';

export const ActionBar: React.FC = () => {
    const { pathname } = useRouter();

    const getFillColor = (value: string) =>
        pathname === value ? 'rgb(225, 228, 232)' : 'rgb(106, 115, 125)';

    const isActive = (value: string) => pathname === value;

    return (
        <Wrapper>
            <TopItems>
                <Link href="/">
                    <ActionIconWrapper isActive={isActive('/')}>
                        <ActionIcon>
                            <FilesIcon fill={getFillColor('/')} />
                        </ActionIcon>
                    </ActionIconWrapper>
                </Link>
                {/* <Link href="/github">
                    <ActionIconWrapper isActive={isActive('/github')}>
                        <ActionIcon>
                            <GithubIcon fill={getFillColor('/github')} />
                        </ActionIcon>
                    </ActionIconWrapper>
                </Link> */}
            </TopItems>
            <BottomItems>
                <Link href="/themeConfig">
                    <ActionIconWrapper isActive={isActive('/themeConfig')}>
                        <ActionIcon>
                            <SettingsIcon fill={getFillColor('/themeConfig')} />
                        </ActionIcon>
                    </ActionIconWrapper>
                </Link>
            </BottomItems>
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
    width: 55px;
    height: calc(100vh - 85px);

    @media screen and (max-width: 900px) {
        width: 45px;
        height: calc(100vh - 55px);
    }

    @media screen and (max-width: 600px) {
        width: 55px;
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

const BottomItems = styled.div``;
