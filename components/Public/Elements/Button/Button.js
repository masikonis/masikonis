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

        return(
            <a href={this.props.href} className={classnames(styles.button, styles[`button--${type}`], styles[`button--${size}`])} target={this.props.target} onClick={this.props.onClick}>
                {this.props.children}
            </a>
        );
    }
}

export default Button;
