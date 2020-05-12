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

class Index extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isFreeTrialShown: false
        };

        this.showFreeTrial = this.showFreeTrial.bind(this);
        this.hideFreeTrial = this.hideFreeTrial.bind(this);
    }

    showFreeTrial(e) {
        e.preventDefault();

        this.setState({
            isFreeTrialShown: true
        });
    }

    hideFreeTrial() {
        this.setState({
            isFreeTrialShown: false
        });
    }

    componentDidMount() {
        Analytics();
        Fonts();
        Drift();
    }

    render() {
        return(
            <CookiesProvider>
                <div className="indexPage">
                    <Head>
                        <title>Full-Stack Web Developer – Nerijus Masikonis</title>
                        <meta name="description" content="I'm your go-to developer for everything web-related. Most of the other developers have no expertise in digital marketing. I do have."></meta>
                        <link rel="preconnect" href="https://i.vimeocdn.com" />
                    </Head>
                    <MetaTags />
                    <CookieBar gdprAccepted={this.props.gdprAccepted} />
                    <IndexLayout showFreeTrial={this.showFreeTrial}>
                        <Hero />
                        <Testimonials />
                    </IndexLayout>
                    <FreeTrial isFreeTrialShown={this.state.isFreeTrialShown} hideFreeTrial={this.hideFreeTrial} />
                </div>
            </CookiesProvider>
        );
    }
}

export async function getServerSideProps(context) {
    const cookies = new Cookies(context.req.headers.cookie);

    return {
        props: {
            gdprAccepted: (cookies.get('gdprAccepted')) ? cookies.get('gdprAccepted') : false
        },
    }
}

export default Index;
