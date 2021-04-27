import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import styles from './Index.module.scss';

const IndexLayout = (props) => (
    <div className={styles.indexLayout}>
        <Header showConsultation={props.showConsultation} />        
            {props.children}
        <Footer />
    </div>
);

export default IndexLayout;
