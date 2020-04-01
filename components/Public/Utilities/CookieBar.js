import variables from '../variables';

const CookieBar = () => (
    <div className="cookie-bar">
        <div className="container">
            <span>This site uses cookies. By continuing to browse the site, you are agreeing to use of cookies.</span>
            <a href="#">Okay, thanks</a>
        </div>
        <style jsx>{`
        .cookie-bar {
            opacity: 0;
            padding: 22px 20px 22px;
            box-sizing: border-box;
            z-index: 99999;
            overflow: hidden;
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            background-color: #ffffff;
            text-align: center;
            transition: all 0.25s;
        }
        .cookie-bar span {
            font-family: ${variables.primaryFontFamily};
            font-weight: 400;
            font-size: 1rem;
            color: ${variables.colors.blue};
        }
        .cookie-bar a {
            margin-left: 20px;
            font-family: ${variables.primaryFontFamily};
            font-weight: 400;
            font-size: 1rem;
            background: ${variables.colors.blue};
            color: ${variables.colors.white};
            text-decoration: none;
            text-align: center;
            padding: 6px 9px;
            border-radius: 3px;
        }
        `}</style>
    </div>
);

export default CookieBar;
