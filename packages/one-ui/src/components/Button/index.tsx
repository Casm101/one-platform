import './styles.scss';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large' | 'full';
  /**
   * Should the button occupy full width?
   */
  fullWidth?: boolean;
  /**
   * Button contents
   */
  children?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;

  id?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  children,
  fullWidth = false,
  id,
  ...props
}: ButtonProps) => {
  
  const mode = primary ? '--primary' : '--secondary';
  const width = fullWidth ? '--full' : '';

  const handleClick = (e: any) => {
    e.preventDefault();
    console.log("Clicked")
  }

  return (
    <button
      id={id}
      type="button"
      className={['button-styled', `--${size}`, mode, width].join(' ')}
      style={{ backgroundColor }}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};
