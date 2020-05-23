import {SvgLoader, TransformMotion} from 'react-svgmt';
import Button from 'components/Elements/Button/Button';
import styles from './Hero.module.scss';

const Hero = (props) => (
    <div className={styles.hero}>
        <div className="container">
            <div className={styles.hero__bg}>
                <SvgLoader id="hero-bg" path="/images/hero-bg.svg" width="690px" height="522.329482px">
                    <TransformMotion
                        selector="#hero-bg--element5, #hero-bg--element6, #hero-bg--element7, #hero-bg--element21, #hero-bg--element22, #hero-bg--element23, #hero-bg--element24"
                        start={{
                            x: -27,
                            y: -5.5,
                            angle: 0,
                            rotateX: 0,
                            rotateY: 0
                        }}
                        target={{
                            x: 0,
                            y: 0,
                            angle: 0,
                            rotateX: 0,
                            rotateY: 0
                        }}
                    />
                </SvgLoader>
            </div>
            <h1 className={styles.hero__heading}>I'm Your Go-To Developer for<span> </span>Everything Web-Related</h1>
            <h2 className={styles.hero__subheading}>Most of the other developers have no expertise in digital marketing. I do have.</h2>
            <div className={styles.hero__cta}>
                <Button href="#" type="secondary" onClick={props.showFreeTrial}>
                    {/*Get to know me better*/}
                    Test me on a real project
                </Button>
            </div>
        </div>
    </div>
);

export default Hero;
