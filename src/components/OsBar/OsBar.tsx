import { SectionWrapper } from '@components/WindowBar/WindowBar';
import styled from 'styled-components';

const windowOptions = ['Code', 'File', 'Edit', 'View', 'Go', 'Run', 'Terminal', 'Window', 'Help'];

export const OsBar: React.FC = () => {
    return (
        <Wrapper>
            <WindowOptions>
                {windowOptions.map(value => (
                    <p key={value}>{value}</p>
                ))}
            </WindowOptions>
        </Wrapper>
    );
};

const Wrapper = styled(SectionWrapper)`
    background: rgb(80, 79, 71);
    background: linear-gradient(
        324deg,
        rgba(80, 79, 71, 1) 12%,
        rgba(82, 81, 71, 1) 28%,
        rgba(84, 84, 75, 1) 51%,
        rgba(85, 89, 86, 1) 74%,
        rgba(79, 85, 85, 1) 91%
    );

    @media screen and (max-width: 900px) {
        display: none;
    }
`;

const WindowOptions = styled.div`
    flex: 1;
    display: flex;
    margin-right: auto;

    & > * {
        padding: 0 0.5rem;
        cursor: pointer;
    }

    p:first-of-type {
        font-weight: 600;
    }
`;
