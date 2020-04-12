import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import Vimeo from '@vimeo/player';
import Button from '../../Elements/Button/Button';
import styles from './Testimonials.module.scss';

const listData = [
    {
        'image': 'kim-cruickshanks.jpg',
        'alt': 'Kim Cruickshanks',
        'quote': "There are many developers out there, but very few that are as trustworthy and on top of things as Nerijus. Our agency continues to turn to him for help, and he always delivers. On top of his sharp skill set, he is an absolute pleasure to work with.",
        'name': 'Kim Cruickshanks',
        'company': 'CEO, Fuze Branding',
        'location': 'Los Angeles, USA'
    },
    {
        'image': 'christophe-prudent.jpg',
        'alt': 'Christophe Prudent',
        'quote': "Our agency had the fortune of working with Nerijus for more than 7 years. His development skills and expertise made him an invaluable part of our web development team. We absolutely offer our highest possible recommendation.",
        'name': 'Christophe Prudent',
        'company': 'CEO, Too Pixel',
        'location': 'Geneva, Switzerland'
    },
    {
        'image': 'daniel-meza.jpg',
        'alt': 'Daniel Meza',
        'quote': "Working with Nerijus as an agency has made our process and workflow unbelievable. He is incredibly talented WordPress developer but what really makes him stand out is his work ethic and steady approach. I highly recommend Nerijus.",
        'name': 'Daniel Meza',
        'company': 'CEO, Muze Development',
        'location': 'Houston, USA'
    }
];

const listItems = listData.map((testimonial, key) => {
    return (
        <li key={key} className={styles.testimonial}>
            <picture>
                <source srcSet={require('./images/' + testimonial.image + '?webp')} type="image/webp" />
                <source srcSet={require('./images/' + testimonial.image)} type="image/jpeg" />
                <img src={require('./images/' + testimonial.image)} alt={testimonial.alt} className={styles.testimonial__image} width="140" height="140" loading="lazy" />
            </picture>
            <p className={styles.testimonial__quote}><FontAwesomeIcon icon={faQuoteLeft} /> {testimonial.quote}</p>
            <hr />
            <div className={styles.author}>
                <div className={styles.author__name}>{testimonial.name}</div>
                <div className={styles.author__company}>{testimonial.company}</div>
                <div className={styles.author__location}>{testimonial.location}</div>
            </div>
        </li>
    );
});

class Testimonials extends React.Component {
    componentDidMount() {
        const player = new Vimeo('video', {
            id: 351382262,
            responsive: true,
            title: false
        });
    }

    render() {
        return(
            <div className={styles.testimonials}>
                <div className="container">
                    <h2 className={styles.testimonials__heading}>What People Say About Me</h2>
                    <h3 className={styles.testimonials__subheading}>I have been lucky to work with fantastic people over the years. See what some of them have to say.</h3>
                    <div id="video" className={styles.testimonials__video}></div>
                    <ul className={styles.testimonials__list}>{listItems}</ul>
                    <div className={styles.testimonials__cta}>
                        <Button href="https://codeable.io/developers/nerijus-masikonis/#reviews" target="_blank">
                            Read More Testimonials
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Testimonials;
