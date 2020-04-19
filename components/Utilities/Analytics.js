import ReactGA from 'react-ga';

const Analytics = () => {
    ReactGA.initialize('UA-163980117-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
};

export default Analytics;
