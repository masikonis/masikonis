import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import classnames from 'classnames';
import styles from './Footer.module.scss';

const Footer = () => {
    const currentDate = new Date();

    return(
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footer__blocks}>
                    <div className={styles.copyright}>Copyright &copy; {currentDate.getFullYear()} Nerijus Masikonis</div>
                    <div className={styles.links}>
                        <ul className={styles.links__social}>
                            <li className={classnames(styles.socialLink, styles.socialLink__github)}>
                                <a href="https://github.com/masikonis" target="_blank" aria-label="Visit my GitHub profile" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                            </li>
                            <li className={classnames(styles.socialLink, styles.socialLink__linkedin)}>
                                <a href="https://lt.linkedin.com/in/nerijusmasikonis" target="_blank" aria-label="Visit my LinkedIn profile" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;
