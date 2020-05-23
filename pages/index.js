import {useState, useEffect} from 'react';
import {CookiesProvider, Cookies} from 'react-cookie';
import Head from 'next/head';
import Analytics from 'components/Utilities/Analytics';
import Fonts from 'components/Fonts';
import Drift from 'components/Utilities/Drift';
import MetaTags from 'components/Utilities/MetaTags';
import CookieBar from 'components/Utilities/CookieBar/CookieBar';
import IndexLayout from 'components/Layouts/Index/Index';
import Hero from 'components/Content/Hero/Hero';
import Testimonials from 'components/Content/Testimonials/Testimonials';
import FreeTrial from 'components/Utilities/FreeTrial/FreeTrial';

const Index = (props) => {
    const [isFreeTrialShown, setFreeTrialShown] = useState(false);

    useEffect(() => {
        Analytics();
        Fonts();
        Drift();
    });

    function showFreeTrial(event) {
        event.preventDefault();

        setFreeTrialShown(true);
    }

    function hideFreeTrial() {
        setFreeTrialShown(false);
    }

    return(
        <CookiesProvider>
            <div className="indexPage">
                <Head>
                    <title>Full-Stack Web Developer – Nerijus Masikonis</title>
                    <meta name="description" content="I'm your go-to developer for everything web-related. Most of the other developers have no expertise in digital marketing. I do have."></meta>
                    <link rel="preconnect" href="https://i.vimeocdn.com" />
                </Head>
                <MetaTags />
                <CookieBar gdprAccepted={props.gdprAccepted} />
                <IndexLayout showFreeTrial={showFreeTrial}>
                    <Hero showFreeTrial={showFreeTrial} />
                    <Testimonials />
                </IndexLayout>
                <FreeTrial isFreeTrialShown={isFreeTrialShown} hideFreeTrial={hideFreeTrial} />
            </div>
        </CookiesProvider>
    );
};

export async function getServerSideProps(context) {
    const cookies = new Cookies(context.req.headers.cookie);

    return {
        props: {
            gdprAccepted: (cookies.get('gdprAccepted')) ? cookies.get('gdprAccepted') : false
        },
    }
}

export default Index;
