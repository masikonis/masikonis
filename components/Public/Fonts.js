const FontFaceObserver = require('fontfaceobserver');

const Fonts = () => {
    const link = document.createElement('link');

    link.href = 'https://fonts.googleapis.com/css?family=Noto+Serif:400|Noto+Sans:400,700&display=swap';
    link.rel = 'stylesheet';

    document.head.appendChild(link);

    const notoserif = new FontFaceObserver('Noto Serif');
    notoserif.load().then(() => {});

    const notosans = new FontFaceObserver('Noto Sans');
    notosans.load().then(() => {});
};

export default Fonts;
