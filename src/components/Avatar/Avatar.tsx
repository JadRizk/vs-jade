import Image from 'next/image';
import styled from 'styled-components';

export type AvatarSize = 's' | 'm' | 'lg';
export type AvatarStatus = 'active' | 'offline';

export type AvatarProps = {
    imageUrl?: string;
    size?: AvatarSize;
    name: string;
    onClick?: () => void;
};

type AvatarSizeMap = { [key in AvatarSize]: number };

const avatarSizeMap: AvatarSizeMap = {
    s: 40,
    m: 60,
    lg: 100,
};

export const Avatar: React.FC<AvatarProps> = ({ imageUrl, size, name }) => {
    const sizeInPx = avatarSizeMap[size];
    return (
        <StyledAvatar>
            {imageUrl && (
                <AvatarImage
                    src={imageUrl}
                    alt={name}
                    height={sizeInPx}
                    width={sizeInPx}
                    layout={'intrinsic'}
                />
            )}
        </StyledAvatar>
    );
};

const StyledAvatar = styled.div``;

const AvatarImage = styled(Image)`
    border-radius: 50%;
`;
