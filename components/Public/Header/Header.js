import Link from 'next/link';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import Button from '../Elements/Button/Button';
import styles from './Header.module.scss';

const Header = () => {
    const router = useRouter();

    return(
        <header className={classnames(styles.header, styles[`header--cookie-bar-on`])}>
            <div className="container">
                <div className={styles[`header__wrapper`]}>
                    <Link href="/">
                        <a className={styles.logo}>
                            <img src={require('./images/logo.svg?inline')} loading="lazy" />
                        </a>
                    </Link>
                    <nav className={styles.menu}>
                        <Link href="/">
                            <a className={classnames(styles.menu__item, (router.pathname === '/' ? styles[`menu__item--active`] : styles[`menu__item--inactive`]))}>
                                Home
                            </a>
                        </Link>
                        <Link href="/">
                            <a className={classnames(styles.menu__item, (router.pathname === '/about' ? styles[`menu__item--active`] : styles[`menu__item--inactive`]))}>
                                About
                            </a>
                        </Link>
                        <Button href="#" type="tertiary" size="medium">Free Trial</Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
