
import Head from 'next/head';
import Fonts from '../components/Public/Fonts';
import Drift from '../components/Public/Utilities/Drift';
import CookieBar from '../components/Public/Utilities/CookieBar/CookieBar';
import IndexLayout from '../components/Public/Layouts/Index/Index';
import Hero from '../components/Public/Content/Hero/Hero';
import Testimonials from '../components/Public/Content/Testimonials/Testimonials';

class Index extends React.Component {
    componentDidMount() {
        Fonts();
        Drift();
    }

    render() {
        return(
            <div className="index-page">
                <Head>
                    <title>Full-Stack Web Developer – Nerijus Masikonis</title>
                    <link rel="shortcut icon" href="/images/favicon.ico" />
                    <meta key="robots" name="robots" content="noindex,nofollow" />
                </Head>
                <CookieBar />
                <IndexLayout>
                    <Hero />
                    <Testimonials />
                </IndexLayout>
            </div>
        );
    }
}

export default Index;
