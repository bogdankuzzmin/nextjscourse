import Link from 'next/link';
import logoImage from '@/assets/logo.png';
import classes from './header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <img src={logoImage.src} alt="logo" width={80} height={80} />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;