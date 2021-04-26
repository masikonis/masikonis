import {useState, useEffect} from 'react';
import Button from 'components/Elements/Button/Button';
import styles from './FreeTrial.module.scss';

const FreeTrial = (props) => {
    const [wrapperRef, setWrapperRef] = useState();

    useEffect(() => {
        function handleClickOutside(event) {
            if(wrapperRef && ! wrapperRef.contains(event.target)) {
                props.hideFreeTrial();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return function cleanup() {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return(
        <div className={styles.freeTrial} style={{display: (props.isFreeTrialShown === false) ? 'none' : 'flex'}}>
            <div ref={setWrapperRef} className={styles.freeTrial__wrapper}>
                <div className={styles.freeTrial__header}>
                    {/*<h4>Test Me on a Real Project</h4>*/}
                    <h4>Consult an Expert</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.hideFreeTrial}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className={styles.freeTrial__content}>
                    <p>Need help defining your project? Speak with me and get advice on what could be done or how complex different approaches are.</p>
                    <p>Consultations are charged at the fixed price of <strong>$69 USD</strong> for one hour.*</p>
                    <p><small>*That’s $29 USD off the average hourly rate, to help you get going!</small></p>
                    <Button href="https://app.codeable.io/tasks/new?ref=0yTeE&preferredContractor=35672" type="secondary">
                        Start a consultation
                    </Button>
                    {/*<p>Choosing a <strong>developer</strong> is an important decision. I make it easy for you by offering a free trial.</p>
                    <p>My offer is to give you <strong>10 hours of collaboration</strong> for you to use with me in whatever way you wish. It can be on development, consulting, code review or bug fixing.</p>
                    <p><strong>There’s no hidden catch</strong>. The only condition is your good intentions.</p>*/}
                </div>
            </div>
        </div>
    );
};

export default FreeTrial;
