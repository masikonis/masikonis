import Link from 'next/link';

const Header = () => (
    <header>
        <div className="container">
            <div className="logo">

            </div>
            <div className="navigation">
                <Link href="/">
                    <a>Home</a>
                </Link>
                <a href="#">#button</a>
            </div>
        </div>
        <style jsx>{`
        header {
            padding-top: 60px;
        }
        .logo {
            display: none;
            width: 385px;
            height: 62px;
            background: red;
        }
        .navigation {
            display: none;
        }
        `}</style>
    </header>
);

export default Header;
