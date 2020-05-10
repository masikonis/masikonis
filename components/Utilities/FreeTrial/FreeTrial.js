import classnames from 'classnames';
import styles from './FreeTrial.module.scss';

class FreeTrial extends React.Component {
    constructor(props) {
        super(props);

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(event) {
        if(this.wrapperRef && ! this.wrapperRef.contains(event.target)) {
            this.props.hideFreeTrial();
        }
    }

    render() {
        return(
            <div className={styles.freeTrial} style={{display: (this.props.isFreeTrialShown === false) ? 'none' : 'flex'}}>
                <div ref={this.setWrapperRef} className={styles.freeTrial__wrapper}>
                    <div className={styles.freeTrial__header}>
                        <h4>Test Me on a Real Project</h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.props.hideFreeTrial}>
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className={styles.freeTrial__content}>
                        <p>Choosing a <strong>developer</strong> is an important decision. I make it easy for you by offering a free trial.</p>
                        <p>My offer is to give you <strong>10 hours of collaboration</strong> for you to use with me in whatever way you wish. It can be on development, consulting, code review or bug fixing.</p>
                        <p><strong>There’s no hidden catch</strong>. The only condition is your good intentions.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FreeTrial;
