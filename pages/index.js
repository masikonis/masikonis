import {useState, useEffect} from 'react';
import Head from 'next/head';
import Analytics from 'components/Utilities/Analytics';
import Fonts from 'components/Fonts';
import Drift from 'components/Utilities/Drift';
import MetaTags from 'components/Utilities/MetaTags';
import CookieBar from 'components/Utilities/CookieBar/CookieBar';
import IndexLayout from 'components/Layouts/Index/Index';
import Hero from 'components/Content/Hero/Hero';
import Testimonials from 'components/Content/Testimonials/Testimonials';
import Consultation from 'components/Utilities/Consultation/Consultation';

const Index = (props) => {
    const [isConsultationShown, setConsultationShown] = useState(false);

    useEffect(() => {
        Analytics();
        Fonts();
        Drift();
    });

    function showConsultation(event) {
        event.preventDefault();

        setConsultationShown(true);
    }

    function hideConsultation() {
        setConsultationShown(false);
    }

    return(
        <div className="indexPage">
            <Head>
                <title>Full-Stack Web Developer – Nerijus Masikonis</title>
                <meta name="description" content="I'm your go-to developer for everything web-related. Most of the other developers have no expertise in digital marketing. I do have."></meta>
                <link rel="preconnect" href="https://i.vimeocdn.com" />
            </Head>
            <MetaTags />
            <IndexLayout showConsultation={showConsultation}>
                <Hero showConsultation={showConsultation} />
                <Testimonials />
            </IndexLayout>
            <Consultation isConsultationShown={isConsultationShown} hideConsultation={hideConsultation} />
        </div>
    );
};

export default Index;
