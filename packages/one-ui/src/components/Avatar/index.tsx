import './styles.scss';

export interface AvatarProps {
  image?: string;
  userName: string;
  size?: 'small' | 'medium' | 'large';
  shape?: 'square' | 'round';
  notification?: boolean | number;
  notificationIcon?: React.ReactNode;
  notificationBorder?: string;
  notificationColor?: string;
}

/**
 * User Avatar component
 */
export const Avatar = ({
  image,
  userName,
  size = 'medium',
  shape = 'round',
  notification = false,
  notificationIcon,
  notificationBorder = '#fff',
  notificationColor = '#0070F0'
}: AvatarProps) => {

  const userFirstName = userName.split(' ')[0];

  return (
    <div className={['avatar-styled', `--${size}`].join(' ')}>
      <div className={['avatar-content', `--${shape}`].join(' ')}>
      { image ? 
        <img src={image} alt="" />
        :
        <p
          style={{ fontSize: `${16 - userFirstName.length + 4}px` }}
        >
          {userFirstName}
        </p>
      }
      </div>
      { notification &&
        <span
        className="notification"
        style={{ borderColor: notificationBorder, backgroundColor: notificationColor}}>
          { notificationIcon ? notificationIcon : notification }
        </span>
      }
    </div>
  );
};
