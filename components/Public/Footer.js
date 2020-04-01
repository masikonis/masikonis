import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {getCurrentYear} from '../../includes/functions';
import variables from './variables';

const Footer = () => (
    <footer>
        <div className="container">
            <div className="blocks">
                <div className="copyright">Copyright &copy; {getCurrentYear()} Nerijus Masikonis</div>
                <div className="socialLinks">
                    <ul>
                        <li className="linkedin"><a href="https://lt.linkedin.com/in/nerijusmasikonis" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li className="github"><a href="https://github.com/masikonis" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <style jsx>{`
        footer {
            background: ${variables.colors.white};
            padding-top: 30px;
            padding-bottom: 30px;
            border-top: 1px solid ${variables.colors.grey};
        }
        .blocks {
            display: flex;
            flex-wrap: wrap;
        }
        .copyright {
            flex: 1;
            font-family: ${variables.primaryFontFamily};
            font-size: 0.75rem;
        }
        .socialLinks {
            flex: 1;
        }
        .socialLinks > ul {
            position: relative;
            top: -5px;
            list-style-type: none;
            padding: 0;
            margin: 0;
            display: flex;
            justify-content: flex-end;
        }
        .socialLinks > ul > li.linkedin {
            margin-right: 5px;
        }
        .socialLinks > ul > li > a {
            font-size: 20px;
            color: ${variables.colors.black};
        }
        .socialLinks > ul > li > a:hover {
            color: ${variables.colors.blue};
        }
        `}</style>
    </footer>
);

export default Footer;
