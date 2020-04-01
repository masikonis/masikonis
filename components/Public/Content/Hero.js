import {SvgLoader, SvgProxy, TransformMotion} from 'react-svgmt';
import variables from '../variables';

const Hero = () => (
    <div className="hero">
        <div className="container">
            <div className="bg">
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
            <h1>I'm Your Go-To Developer for<span> </span>Everything Web-Related</h1>
            <h2>Most of the other developers have no expertise in digital marketing. I do have.</h2>
            <a href="" className="cta">Get to know me better</a>
        </div>
        <style jsx>{`
        .hero {
            padding-bottom: 100px;
        }
        .hero .bg {
            position: absolute;
            top: 0;
            right: 0;
            opacity: 0.25;
        }
        .hero h1 {
            margin: 0;
            padding: 0;
            font-family: ${variables.secondaryFontFamily};
            font-weight: 400;
            font-size: 3.5rem;
            line-height: 3.85rem;
            color: ${variables.colors.white};
            padding-top: 243px;
            user-select: none;
        }
        .hero h1 span {
            display: block;
        }
        .hero h2 {
            margin: 0;
            padding: 0;
            font-family: ${variables.primaryFontFamily};
            font-weight: 400;
            font-size: 1.375rem;
            color: ${variables.colors.white};
            margin-top: 20px;
            user-select: none;
        }
        .cta {
            display: inline-block;
            font-family: ${variables.primaryFontFamily};
            font-weight: 700;
            font-size: 1rem;
            color: ${variables.colors.blue};
            background: ${variables.colors.white};
            text-transform: uppercase;
            text-decoration: none;
            padding: 21px 32px;
            margin-top: 42px;
            border-radius: .25rem;
            transition: all .2s ease-in-out;
        }
        .cta:hover {
            background: ${variables.colors.black};
            color: ${variables.colors.white};
        }
        `}</style>
    </div>
);

export default Hero;
