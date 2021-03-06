import Link from 'next/link';
import {useRouter} from 'next/router';
import classnames from 'classnames';
import Button from 'components/Elements/Button/Button';
import styles from './Header.module.scss';

const Header = (props) => {
    const router = useRouter();

    return(
        <header className={classnames(styles.header)}>
            <div className="container">
                <div className={styles[`header__wrapper`]}>
                    <Link href="/">
                        <a className={styles.logo}>
                            <span>Go to home page</span>
                            <img src={require('./images/logo-big.svg?inline')} width="385" height="65" alt="logo" loading="lazy" className={classnames(styles.image, styles[`image--big`])} />
                            <img src={require('./images/logo-small.svg?inline')} width="98" height="65" alt="logo" loading="lazy" className={classnames(styles.image, styles[`image--small`])} />
                        </a>
                    </Link>
                    <nav className={styles.menu}>
                        <Button href="#" type="tertiary" size="small-to-medium" target="_blank" onClick={props.showConsultation}>Schedule 1:1</Button>
                    </nav>
                </div>
            </div>
        </header>
    );
};



export default Header;
