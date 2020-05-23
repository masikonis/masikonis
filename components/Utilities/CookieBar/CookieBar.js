import {useState} from 'react';
import {useCookies} from 'react-cookie';
import Button from 'components/Elements/Button/Button';
import styles from './CookieBar.module.scss';

const CookieBar = (props) => {
    const [cookies, setCookie] = useCookies(['gdprAccepted']);
    const [gdprAccepted, setGdprAccepted] = useState(((props.gdprAccepted === '1') ? true : false));

    function gdprAccept() {
        setCookie('gdprAccepted', 1);
        setGdprAccepted(true);
    }

    return(
        <div className={styles.cookieBar} style={{display: gdprAccepted ? 'none' : 'block'}}>
            <div className="container">
                <span className={styles.cookieBar__text}>This site uses cookies. By continuing to browse the site, you are agreeing to use of cookies.</span>
                <Button size="small" onClick={gdprAccept}>Okay, thanks</Button>
            </div>
        </div>
    );
};

export default CookieBar;
