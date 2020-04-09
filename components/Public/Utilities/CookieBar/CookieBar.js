import Button from '../../Elements/Button/Button';
import styles from './CookieBar.module.scss';

const CookieBar = () => (
    <div className={styles.cookieBar}>
        <div className="container">
            <span className={styles.text}>This site uses cookies. By continuing to browse the site, you are agreeing to use of cookies.</span>
            <Button href="#" size="small">Okay, thanks</Button>
        </div>
    </div>
);

export default CookieBar;
