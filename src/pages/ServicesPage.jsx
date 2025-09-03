import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './pages.css';

const ServicesPage = () => {
  const [heroRef] = useScrollAnimation(0.3);
  const [worshipRef, worshipVisible] = useScrollAnimation(0.2);
  const [educationRef, educationVisible] = useScrollAnimation(0.2);
  const [outreachRef, outreachVisible] = useScrollAnimation(0.2);
  const [familyRef, familyVisible] = useScrollAnimation(0.2);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/topimage.jpg)` }}
        ref={heroRef}
      >
        <div className="page-hero-content">
          <h1>Our Services & Programs</h1>
          <p>Comprehensive ministry programs designed to nurture children spiritually, academically, and socially</p>
        </div>
      </section>

      {/* Worship & Discipleship Section */}
      <section className="section" ref={worshipRef}>
        <div className="container">
          <div className="section-header">
            <h2>Worship & Discipleship</h2>
            <p>Building strong spiritual foundations through engaging worship and biblical teaching</p>
          </div>
          <div className={`grid grid-2 ${worshipVisible ? 'reveal active' : 'reveal'}`}>
            <div>
              <h3>Sunday Worship Services</h3>
              <p>
                Every Sunday, we gather for vibrant, child-friendly worship services that include 
                interactive Bible stories, praise and worship, and age-appropriate teachings. Our 
                services are designed to make children feel welcome and engaged in their faith journey.
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Interactive Bible storytelling</li>
                <li>Praise and worship sessions</li>
                <li>Prayer and meditation time</li>
                <li>Fellowship and community building</li>
              </ul>
            </div>
            <div>
              <img 
                src={`${process.env.PUBLIC_URL}/assets/child-3.jpg`}
                alt="Children participating in worship" 
                style={{ 
                  borderRadius: '8px', 
                  width: '100%', 
                  height: '300px', 
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Educational Programs Section */}
      <section className="section" ref={educationRef}>
        <div className="container">
          <div className="section-header">
            <h2>Educational Programs</h2>
            <p>Supporting academic excellence and personal growth</p>
          </div>
          <div className={`grid grid-3 ${educationVisible ? 'reveal active' : 'reveal'}`}>
            <div className="card">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/child.jpg`}
                alt="After-school homework help" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}
              />
              <h3>After-School Programs</h3>
              <p>
                Comprehensive homework assistance, tutoring, and enrichment activities that help 
                children excel academically while building confidence and study skills.
              </p>
            </div>
            <div className="card">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/child-2.jpg`}
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
              <h3>Summer Camps</h3>
              <p>
                Fun-filled summer programs combining education, recreation, and spiritual growth. 
                Children enjoy outdoor activities, creative arts, and character-building experiences.
              </p>
            </div>
            <div className="card">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/children.jpg`}
                alt="Life skills workshop" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '1rem'
                }}
              />
              <h3>Life Skills Workshops</h3>
              <p>
                Practical workshops teaching essential life skills including communication, 
                leadership, problem-solving, and emotional intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Outreach Section */}
      <section className="section" ref={outreachRef}>
        <div className="container">
          <div className="section-header">
            <h2>Community Outreach</h2>
            <p>Extending God's love beyond our walls</p>
          </div>
          <div className={`grid grid-2 ${outreachVisible ? 'reveal active' : 'reveal'}`}>
            <div>
              <img 
                src={`${process.env.PUBLIC_URL}/assets/afterschool.png`}
                alt="Community service project" 
                style={{ 
                  borderRadius: '8px', 
                  width: '100%', 
                  height: '300px', 
                  objectFit: 'cover',
                  objectPosition: 'center top'
                }}
              />
            </div>
            <div>
              <h3>Service Projects</h3>
              <p>
                Regular community service initiatives that teach children the importance of 
                giving back and serving others. Our outreach programs include:
              </p>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
                <li>Food bank donations and volunteering</li>
                <li>Senior care facility visits</li>
                <li>Environmental cleanup projects</li>
                <li>Fundraising for local charities</li>
                <li>Holiday gift drives for families in need</li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                These experiences help children develop empathy, compassion, and a heart for 
                serving their community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Family Support Section */}
      <section className="section" ref={familyRef}>
        <div className="container">
          <div className="section-header">
            <h2>Family Support Services</h2>
            <p>Supporting families in their journey of faith and parenting</p>
          </div>
          <div className={`grid grid-3 ${familyVisible ? 'reveal active' : 'reveal'}`}>
            <div className="card">
              <h3>Parenting Workshops</h3>
              <p>
                Monthly workshops covering topics like positive discipline, effective communication, 
                and building strong family relationships based on biblical principles.
              </p>
            </div>
            <div className="card">
              <h3>Family Counseling</h3>
              <p>
                Confidential counseling services for families facing challenges, provided by 
                trained Christian counselors who understand the unique needs of families.
              </p>
            </div>
            <div className="card">
              <h3>Resource Center</h3>
              <p>
                A comprehensive resource center offering books, materials, and referrals to 
                help families navigate various life situations and challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Special Programs & Events</h2>
            <p>Unique opportunities for growth and celebration</p>
          </div>
          <div className="grid grid-4">
            <div className="card text-center">
              <h3>Vacation Bible School</h3>
              <p>Annual summer program with themed activities, crafts, and Bible lessons</p>
            </div>
            <div className="card text-center">
              <h3>Children's Choir</h3>
              <p>Music ministry program teaching children to worship through song</p>
            </div>
            <div className="card text-center">
              <h3>Youth Leadership</h3>
              <p>Leadership development program for older children and teenagers</p>
            </div>
            <div className="card text-center">
              <h3>Holiday Celebrations</h3>
              <p>Special events and celebrations for Easter, Christmas, and other holidays</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container text-center">
          <div className="section-header">
            <h2>Get Involved</h2>
            <p>Join us in making a difference in children's lives</p>
          </div>
          <div className="flex-center" style={{ gap: '20px', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-primary">Enroll Your Child</a>
            <a href="/events" className="btn btn-secondary">View Upcoming Events</a>
            <a href="/about" className="btn btn-secondary">Learn More About Us</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
