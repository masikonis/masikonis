import variables from '../variables';
import Header from '../Header';
import Footer from '../Footer';

const IndexLayout = props => (
    <div className="index-layout">
        <Header />        
        {props.children}
        <Footer />
        <style jsx global>{`
        body {
            font-family: ${variables.primaryFontFamily};
            color: ${variables.colors.black};
        }
        `}</style>
        <style jsx>{`
        .index-layout {
            background: ${variables.colors.blue};
        }
        `}</style>
    </div>
);

export default IndexLayout;
