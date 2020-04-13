import classnames from 'classnames';
import styles from './Button.module.scss';

class Button extends React.Component {
    render() {
        const {
            href = 'javascript:;',
            type = 'primary',
            size = 'large',
            target,
            onClick
        } = this.props;
        const relValue = (target === '_blank') ? 'noopener noreferrer' : '';

        return(
            <a href={this.props.href} className={classnames(styles.button, styles[`button--${type}`], styles[`button--${size}`])} target={this.props.target} onClick={this.props.onClick} rel={relValue}>
                {this.props.children}
            </a>
        );
    }
}

export default Button;
