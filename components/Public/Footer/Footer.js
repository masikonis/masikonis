import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {getCurrentYear} from '../../../includes/functions';
import styles from './Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <div className="container">
            <div className={styles.blocks}>
                <div className={styles.copyright}>Copyright &copy; {getCurrentYear()} Nerijus Masikonis</div>
                <div className={styles.socialLinks}>
                    <ul>
                        <li className={styles.linkedin}><a href="https://lt.linkedin.com/in/nerijusmasikonis" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href="https://github.com/masikonis" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
