import {CookiesProvider, Cookies} from 'react-cookie';
import Head from 'next/head';
import Fonts from '../components/Public/Fonts';
import Drift from '../components/Public/Utilities/Drift';
import MetaTags from '../components/Public/Utilities/MetaTags';
import CookieBar from '../components/Public/Utilities/CookieBar/CookieBar';
import IndexLayout from '../components/Public/Layouts/Index/Index';
import Hero from '../components/Public/Content/Hero/Hero';
import Testimonials from '../components/Public/Content/Testimonials/Testimonials';

class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
                    <IndexLayout>
                        <Hero />
                        <Testimonials />
                    </IndexLayout>
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
