import { Button } from '..';
import './styles.scss';

interface HeaderProps {
  logo?: string;
  siteName: string;

}

/**
 * Site header component
 */
export const Header = ({
  logo,
  siteName
}: HeaderProps) => {
  
  return (
    <header className={['header-styled'].join(' ')}>
      <div className='header-container'>

        {/* Logo section of header */}
        <a href="/" className='logo-link'>
          <img src={logo} alt='' />
          <p>{siteName}</p>
        </a>

        {/* Login section of header */}
        <Button primary>Log in</Button>

      </div>
    </header>
  );
};
