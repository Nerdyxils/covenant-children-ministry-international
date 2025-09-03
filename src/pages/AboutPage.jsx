import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './pages.css';

const AboutPage = () => {
  const [heroRef] = useScrollAnimation(0.3);
  const [storyRef, storyVisible] = useScrollAnimation(0.2);
  const [valuesRef, valuesVisible] = useScrollAnimation(0.2);
  const [teamRef, teamVisible] = useScrollAnimation(0.2);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/topimage.jpg)` }}
        ref={heroRef}
      >
        <div className="page-hero-content">
          <h1>About Covenant Children Ministry International</h1>
          <p>Nurturing hearts, building futures, and sharing God's love with children and families since 2010</p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section" ref={storyRef}>
        <div className="container">
          <div className="section-header">
            <h2>Our Story</h2>
            <p>A journey of faith, compassion, and community impact</p>
          </div>
          <div className={`grid grid-2 ${storyVisible ? 'reveal active' : 'reveal'}`}>
            <div>
              <h3>A Vision Born in Faith</h3>
              <p>
                Founded in 2010 by Evangelist Bolanle Oyeniyi, Covenant Children Ministry International 
                began with a simple yet powerful vision: to create a safe, nurturing environment where 
                children could discover their God-given potential and grow in faith.
              </p>
              <p>
                What started as a small gathering in a local community has grown into a vibrant 
                ministry that serves hundreds of children and families across the Greater Toronto Area. 
                Our journey has been marked by God's faithfulness and the incredible support of our 
                community partners.
              </p>
            </div>
            <div>
              <img 
                src={`${process.env.PUBLIC_URL}/assets/children.jpg`}
                alt="Children learning and growing together" 
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

      {/* Our Values Section */}
      <section className="section" ref={valuesRef}>
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          <div className={`grid grid-3 ${valuesVisible ? 'reveal active' : 'reveal'}`}>
            <div className="card">
              <h3>Faith in Christ</h3>
              <p>
                Jesus Christ is the foundation of our ministry. We believe that every child is 
                created in God's image and deserves to know His love and grace.
              </p>
            </div>
            <div className="card">
              <h3>Unconditional Love</h3>
              <p>
                We love and accept every child unconditionally, regardless of their background, 
                circumstances, or challenges they may face.
              </p>
            </div>
            <div className="card">
              <h3>Excellence in Service</h3>
              <p>
                We strive for excellence in everything we do, from our educational programs to 
                our community outreach initiatives.
              </p>
            </div>
            <div className="card">
              <h3>Community Partnership</h3>
              <p>
                We believe in the power of community and actively partner with families, churches, 
                and organizations to create lasting impact.
              </p>
            </div>
            <div className="card">
              <h3>Holistic Development</h3>
              <p>
                We nurture the whole child - spiritually, academically, socially, and emotionally - 
                helping them grow into confident, compassionate leaders.
              </p>
            </div>
            <div className="card">
              <h3>Innovation & Growth</h3>
              <p>
                We continuously seek new ways to serve our community better, embracing innovation 
                while staying true to our core mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="section" ref={teamRef}>
        <div className="container">
          <div className="section-header">
            <h2>Our Leadership Team</h2>
            <p>Dedicated individuals committed to serving children and families</p>
          </div>
          <div className={`grid grid-3 ${teamVisible ? 'reveal active' : 'reveal'}`}>
            <div className="card text-center">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/mummy_oyeniyi.jpg`}
                alt="Evangelist Bolanle Oyeniyi" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '20px'
                }}
              />
              <h3>Evangelist Bolanle Oyeniyi</h3>
              <p>Founder & Executive Director</p>
              <p>
                A passionate evangelist with over 20 years of experience in children's ministry. 
                Her vision and leadership have been instrumental in growing our ministry from 
                a small gathering to a thriving community organization.
              </p>
            </div>
            <div className="card text-center">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/child.jpg`}
                alt="Ministry Team" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '20px'
                }}
              />
              <h3>Children Ministry Team</h3>
              <p>Program Coordinators</p>
              <p>
                Our dedicated team of educators, mentors, and volunteers work tirelessly to 
                create engaging programs that inspire children to learn, grow, and discover 
                their unique gifts and talents.
              </p>
            </div>
            <div className="card text-center">
              <img 
                src={`${process.env.PUBLIC_URL}/assets/child-2.jpg`}
                alt="Community Volunteers" 
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: '4px',
                  marginBottom: '20px'
                }}
              />
              <h3>Community Volunteers</h3>
              <p>Support Team</p>
              <p>
                Our amazing volunteers are the backbone of our ministry, providing essential 
                support in various areas including event planning, administrative tasks, and 
                direct service to children and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section">
        <div className="container text-center">
          <div className="section-header">
            <h2>Join Our Mission</h2>
            <p>Be part of something bigger than yourself</p>
          </div>
          <div className="flex-center" style={{ gap: '20px', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-primary">Get Involved</a>
            <a href="/services" className="btn btn-secondary">Learn About Our Programs</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
