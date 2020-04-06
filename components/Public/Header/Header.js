import Link from 'next/link';
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.logo}>

            </div>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <a href="#">#button</a>
            </nav>
        </div>
    </header>
);

export default Header;
