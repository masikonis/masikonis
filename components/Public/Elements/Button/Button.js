import classnames from 'classnames';
import styles from './Button.module.scss';

class Button extends React.Component {
    render() {
        let buttonClass = 'button__primary';

        if(this.props.type === 'secondary') {
            buttonClass = 'button__secondary';
        }

        return(
            <a href={this.props.href} className={classnames(styles.button, styles[`${buttonClass}`])} target={this.props.target}>
                {this.props.children}
            </a>
        );
    }
}

export default Button;
