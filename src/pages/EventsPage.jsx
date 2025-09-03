import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './pages.css';

const EventsPage = () => {
  const [heroRef] = useScrollAnimation(0.3);
  const [upcomingRef, upcomingVisible] = useScrollAnimation(0.2);
  const [highlightsRef, highlightsVisible] = useScrollAnimation(0.2);
  const [calendarRef, calendarVisible] = useScrollAnimation(0.2);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/topimage.jpg)` }}
        ref={heroRef}
      >
        <div className="page-hero-content">
          <h1>Our Events & Activities</h1>
          <p>Join us for exciting programs, celebrations, and community gatherings throughout the year</p>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="section" ref={upcomingRef}>
        <div className="container">
          <div className="section-header">
            <h2>Upcoming Events</h2>
            <p>Mark your calendar for these exciting opportunities</p>
          </div>
          <div className={`grid grid-2 ${upcomingVisible ? 'reveal active' : 'reveal'}`}>
            <div className="card">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/child.jpg`}
                alt="Summer camp activities" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}
              />
              <h3>Summer Camp 2024</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                July 15-19, 2024
              </p>
              <p>
                Join us for an exciting week of outdoor adventures, creative arts, Bible stories, 
                and friendship building. This year's theme: "Adventure with Jesus!"
              </p>
              <div style={{ marginTop: '1rem' }}>
                <a href="/contact" className="btn btn-primary">Register Now</a>
              </div>
            </div>
            <div className="card">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/child-2.jpg`}
                alt="Vacation Bible School" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}
              />
              <h3>Vacation Bible School</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                August 5-9, 2024
              </p>
              <p>
                A week of fun-filled learning with themed activities, crafts, music, and 
                Bible lessons. This year we're exploring "God's Amazing Creation!"
              </p>
              <div style={{ marginTop: '1rem' }}>
                <a href="/contact" className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regular Programs Section */}
      <section className="section" ref={calendarRef}>
        <div className="container">
          <div className="section-header">
            <h2>Regular Programs & Activities</h2>
            <p>Ongoing opportunities for children and families</p>
          </div>
          <div className={`grid grid-3 ${calendarVisible ? 'reveal active' : 'reveal'}`}>
            <div className="card text-center">
              <h3>Sunday Worship</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Every Sunday</p>
              <p>10:00 AM - 12:00 PM</p>
              <p>Join us for child-friendly worship services with interactive Bible stories and activities.</p>
            </div>
            <div className="card text-center">
              <h3>After-School Program</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Monday - Friday</p>
              <p>3:00 PM - 6:00 PM</p>
              <p>Homework help, tutoring, and enrichment activities in a Christ-centered environment.</p>
            </div>
            <div className="card text-center">
              <h3>Parenting Workshops</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>First Saturday Monthly</p>
              <p>10:00 AM - 12:00 PM</p>
              <p>Monthly workshops covering topics like positive discipline and family communication.</p>
            </div>
            <div className="card text-center">
              <h3>Children's Choir Practice</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Wednesday</p>
              <p>4:00 PM - 5:30 PM</p>
              <p>Music ministry program teaching children to worship through song and performance.</p>
            </div>
            <div className="card text-center">
              <h3>Youth Leadership</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Friday</p>
              <p>5:00 PM - 7:00 PM</p>
              <p>Leadership development program for older children and teenagers.</p>
            </div>
            <div className="card text-center">
              <h3>Family Game Night</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>Last Friday Monthly</p>
              <p>6:00 PM - 8:00 PM</p>
              <p>Fun family activities, games, and fellowship in a relaxed, welcoming atmosphere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Highlights Section */}
      <section className="section" ref={highlightsRef}>
        <div className="container">
          <div className="section-header">
            <h2>Recent Highlights</h2>
            <p>Memorable moments from our recent events and activities</p>
          </div>
          <div className={`grid grid-3 ${highlightsVisible ? 'reveal active' : 'reveal'}`}>
            <div className="card">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/child-3.jpg`}
                alt="March Break Camp" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}
              />
              <h3>March Break Camp 2024</h3>
              <p>
                A week of fun, learning, and friendship with outdoor activities, creative 
                workshops, and spiritual growth opportunities.
              </p>
            </div>
            <div className="card">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/children.jpg`}
                alt="Easter Celebration" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}
              />
              <h3>Easter Celebration 2024</h3>
              <p>
                A joyous celebration of Christ's resurrection with egg hunts, family activities, 
                and meaningful worship services.
              </p>
            </div>
            <div className="card">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/childrens-day.jpg`}
                alt="Children's Day" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}
              />
              <h3>Children's Day 2024</h3>
              <p>
                A special day dedicated to celebrating children with games, crafts, 
                performances, and lots of fun activities.
              </p>
            </div>
            <div className="card">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/awards.jpg`}
                alt="Academic Achievement Awards" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}
              />
              <h3>Academic Achievement Awards</h3>
              <p>
                Celebrating the academic success of our children with an awards ceremony 
                recognizing their hard work and dedication.
              </p>
            </div>
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1200&auto=format&fit=crop" 
                alt="Community service" 
              />
              <h3>Community Service Day</h3>
              <p>
                Children and families came together to serve our community through various 
                volunteer activities and charitable projects.
              </p>
            </div>
            <div className="card">
              <img 
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=1200&auto=format&fit=crop" 
                alt="Fundraising dinner" 
              />
              <h3>Annual Fundraising Dinner</h3>
              <p>
                A successful evening of fellowship and fundraising to support our ministry 
                programs and community outreach initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Special Events & Celebrations</h2>
            <p>Annual celebrations and special occasions</p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>Christmas Celebration</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>December</p>
              <p>
                A magical celebration of Christ's birth featuring a children's nativity play, 
                carol singing, gift-giving, and family activities. This is one of our most 
                anticipated events of the year.
              </p>
            </div>
            <div className="card">
              <h3>Graduation Ceremony</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>June</p>
              <p>
                Celebrating the achievements of our children as they complete various programs 
                and move on to new chapters in their educational and spiritual journey.
              </p>
            </div>
            <div className="card">
              <h3>Family Fun Day</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>July</p>
              <p>
                An outdoor celebration with games, food, music, and activities for the whole 
                family. A perfect opportunity to connect with other families in our community.
              </p>
            </div>
            <div className="card">
              <h3>Thanksgiving Service</h3>
              <p style={{ color: 'var(--primary-color)', fontWeight: 'bold' }}>October</p>
              <p>
                A special service of gratitude where children and families come together to 
                give thanks for God's blessings and the community we share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container text-center">
          <div className="section-header">
            <h2>Stay Connected</h2>
            <p>Don't miss out on our exciting events and activities</p>
          </div>
          <div className="flex-center" style={{ gap: '20px', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-primary">Register for Events</a>
            <a href="/services" className="btn btn-secondary">Learn About Our Programs</a>
            <a href="/about" className="btn btn-secondary">Get Involved</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;
