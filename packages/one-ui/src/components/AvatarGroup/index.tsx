import { Avatar, AvatarProps } from '..';
import './styles.scss';

interface AvatarGroupProps {
  avatars: AvatarProps[];
}

/**
 * User AvatarGroup component
 */
export const AvatarGroup = ({
  avatars
}: AvatarGroupProps) => {

  return (
    <div className="avatargroup-styled">
      {avatars.map((avatar) => (
        <Avatar
          {...avatar}
        />
      ))}
    </div>
  );
};
