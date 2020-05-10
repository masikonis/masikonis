import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import styles from './Index.module.scss';

const IndexLayout = props => (
    <div className={styles.indexLayout}>
        <Header showFreeTrial={props.showFreeTrial} />        
            {props.children}
        <Footer />
    </div>
);

export default IndexLayout;
