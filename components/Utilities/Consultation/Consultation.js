import {useState, useEffect} from 'react';
import Button from 'components/Elements/Button/Button';
import styles from './Consultation.module.scss';

const Consultation = (props) => {
    const [wrapperRef, setWrapperRef] = useState();

    useEffect(() => {
        function handleClickOutside(event) {
            if(wrapperRef && ! wrapperRef.contains(event.target)) {
                props.hideConsultation();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return function cleanup() {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    return(
        <div className={styles.consultation} style={{display: (props.isConsultationShown === false) ? 'none' : 'flex'}}>
            <div ref={setWrapperRef} className={styles.consultation__wrapper}>
                <div className={styles.consultation__header}>
                    <h4>Consult an Expert</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.hideConsultation}>
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className={styles.consultation__content}>
                    <p>Need help defining your project? Speak with me and get advice on what could be done or how complex different approaches are.</p>
                    <p>Consultations are charged at the fixed price of <strong>$69 USD</strong> for one hour.*</p>
                    <p><small>*That’s $29 USD off the average hourly rate, to help you get going!</small></p>
                    <Button href="https://app.codeable.io/tasks/new?ref=0yTeE&preferredContractor=35672" target="_blank" type="secondary">
                        Start a consultation
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
