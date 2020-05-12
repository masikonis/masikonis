import {instanceOf} from 'prop-types';
import {withCookies, Cookies} from 'react-cookie';
import Button from 'components/Elements/Button/Button';
import styles from './CookieBar.module.scss';

class CookieBar extends React.Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            gdprAccepted: (props.gdprAccepted === '1') ? true : false
        };

        this.gdprAccept = this.gdprAccept.bind(this);
    }

    gdprAccept() {
        const {cookies} = this.props;

        cookies.set('gdprAccepted', 1);

        this.setState({
            gdprAccepted: true
        });
    }

    render() {
        return(
            <div className={styles.cookieBar} style={{display: this.state.gdprAccepted ? 'none' : 'block'}}>
                <div className="container">
                    <span className={styles.cookieBar__text}>This site uses cookies. By continuing to browse the site, you are agreeing to use of cookies.</span>
                    <Button size="small" onClick={this.gdprAccept}>Okay, thanks</Button>
                </div>
            </div>
        );
    }
}

export default withCookies(CookieBar);
