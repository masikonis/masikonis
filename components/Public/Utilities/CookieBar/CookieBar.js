import styles from './CookieBar.module.scss';

const CookieBar = () => (
    <div className={styles.cookieBar}>
        <div className="container">
            <span className={styles.text}>This site uses cookies. By continuing to browse the site, you are agreeing to use of cookies.</span>
            <a href="#" className={styles.cta}>Okay, thanks</a>
        </div>
    </div>
);

export default CookieBar;
