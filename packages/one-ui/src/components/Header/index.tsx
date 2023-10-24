import { Button } from '..';
import './styles.scss';

interface HeaderProps {
  logo?: string;
  siteName: string;
  loginLink: string;
}

/**
 * Site header component
 */
export const Header = ({
  logo,
  siteName,
  loginLink
}: HeaderProps) => {

  const goToLogin = () => {
    window.location.href = loginLink;
  }
  
  return (
    <header className={['header-styled'].join(' ')}>
      <div className='header-container'>

        {/* Logo section of header */}
        <a href="/" className='logo-link'>
          <img src={logo} alt='' />
          <p>{siteName}</p>
        </a>

        {/* Login section of header */}
        <Button
         primary
         onClick={goToLogin}
        >Log in</Button>

      </div>
    </header>
  );
};
