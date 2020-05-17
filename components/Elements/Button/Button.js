import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = (props) => {
    const {
        href = 'javascript:;',
        type = 'primary',
        size = 'large',
        target,
        onClick
    } = props;
    const relValue = (target === '_blank') ? 'noopener noreferrer' : '';

    return(
        <a href={props.href} className={classnames(styles.button, styles[`button--${type}`], styles[`button--${size}`])} target={props.target} onClick={props.onClick} rel={relValue}>
            {props.children}
        </a>
    );
};

export default Button;
