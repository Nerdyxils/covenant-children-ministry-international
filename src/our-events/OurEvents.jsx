import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import event1 from '../assets/event1.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './OurEvent.css';
import '../pages/pages.css'; // Import for consistent button styling

const EventCarousel = () => {
    const events = [
        {
            id: 1,
            image: event1,
            title: 'Summer Fundraising',
            description: 'Description for event 1',
        },
        // {
        //     id: 2,
        //     image: 'path/to/image2.jpg',
        //     title: 'Event 2',
        //     description: 'Description for event 2',
        // },
        // {
        //     id: 3,
        //     image: 'path/to/image3.jpg',
        //     title: 'Event 3',
        //     description: 'Description for event 3',
        // },
    ];

    return (
        <div className="event-carousel">
            <div className="event__title">
                <h1>Fundraising Event</h1>
            </div>
            <Carousel 
                showArrows={true} 
                infiniteLoop={true} 
                showThumbs={false} 
                showStatus={false} 
                autoPlay={true} 
                interval={5000}
            >
                {events.map(event => (
                    <div key={event.id} className="carousel-slide">
                        <img src={event.image} alt={event.title} />
                        {/* <div className="carousel-caption">
                            <h3>{event.title}</h3>
                            <p>{event.description}</p>
                        </div> */}
                    </div>
                ))}
            </Carousel>
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <Link to="/events" className="btn btn-primary">View All Our Events</Link>
            </div>
        </div>
    );
};

export default EventCarousel;
