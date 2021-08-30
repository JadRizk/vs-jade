import Image from 'next/image';
import Link from 'next/link';
import styled, { css } from 'styled-components';

export const ContentExplorer: React.FC = () => {
    return (
        <ExplorerWrapper>
            <Title>Explorer</Title>
            <>
                <Toggle type="checkbox" />
                <FileHeading>Me</FileHeading>

                <FilesWrapper>
                    <Link href="/">
                        <FileEntry>
                            <Image
                                src="/svg/react_icon.svg"
                                alt="React Icon"
                                height={18}
                                width={18}
                            />
                            <p>home.jsx</p>
                        </FileEntry>
                    </Link>
                    <Link href="/github">
                        <FileEntry>
                            <Image
                                src="/svg/markdown_icon.svg"
                                alt="Markdown Icon"
                                height={18}
                                width={18}
                            />{' '}
                            <p>github.md</p>
                        </FileEntry>
                    </Link>
                </FilesWrapper>
            </>
        </ExplorerWrapper>
    );
};

const ExplorerWrapper = styled.div`
    ${({ theme: { colors } }) =>
        css`
            background: ${colors.explorerBg};
            border-right: 1px solid ${colors.explorerBorder};
        `};
    width: 18vw;
    color: rgb(225, 228, 232);
    font-family: 'Source Sans Pro', sans-serif;

    @media screen and (max-width: 900px) {
        width: 20vw;
    }

    @media screen and (max-width: 600px) {
        display: none;
    }
`;

const Title = styled.h3`
    padding: 0.5rem 0.75rem;
    font-weight: 300;
    text-transform: uppercase;
    font-size: 0.9rem;
    letter-spacing: 1px;
    margin-bottom: 0.75rem;
`;

const Toggle = styled.input`
    position: absolute;
    opacity: 0;
    z-index: -1;
`;

const FileHeading = styled.label`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.8rem;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 0.5rem;
`;

const FilesWrapper = styled.div`
    padding: 0.5rem 0;
    cursor: pointer;
`;

const FileEntry = styled.div`
    padding: 0.2rem 1rem;
    display: flex;
    align-items: center;
    font-size: 0.875rem;

    &:hover {
        ${({ theme: { colors } }) =>
            css`
                background: ${colors.explorerHoverBg};
            `};
    }
`;
