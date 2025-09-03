import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './pages.css';

const MissionPage = () => {
  const [heroRef] = useScrollAnimation(0.3);
  const [missionRef, missionVisible] = useScrollAnimation(0.2);
  const [visionRef, visionVisible] = useScrollAnimation(0.2);
  const [goalsRef, goalsVisible] = useScrollAnimation(0.2);
  const [impactRef, impactVisible] = useScrollAnimation(0.2);

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section 
        className="page-hero" 
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/topimage.jpg)` }}
        ref={heroRef}
      >
        <div className="page-hero-content">
          <h1>Our Mission & Vision</h1>
          <p>Guided by faith, driven by love, committed to transforming children's lives through Christ's love</p>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="section" ref={missionRef}>
        <div className="container">
          <div className="section-header">
            <h2>Our Mission</h2>
            <p>The heart of what we do and why we do it</p>
          </div>
          <div className={`grid grid-2 ${missionVisible ? 'reveal active' : 'reveal'}`}>
            <div>
              <h3>Empowering Children Through Christ's Love</h3>
              <p>
                Our mission is to nurture and empower children to discover their God-given potential, 
                lead them into a personal relationship with Jesus Christ, and walk alongside families 
                with practical support and spiritual guidance.
              </p>
              <p>
                We believe that every child is a precious gift from God, created with unique talents, 
                abilities, and purpose. Through our comprehensive programs and loving community, we 
                strive to help children grow in faith, character, and wisdom.
              </p>
              <p>
                Our approach is holistic - we address the spiritual, emotional, social, and academic 
                needs of each child, recognizing that true growth happens when all aspects of a child's 
                development are nurtured in harmony.
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

      {/* Vision Statement Section */}
      <section className="section" ref={visionRef}>
        <div className="container">
          <div className="section-header">
            <h2>Our Vision</h2>
            <p>The future we're working to create</p>
          </div>
          <div className={`grid grid-2 ${visionVisible ? 'reveal active' : 'reveal'}`}>
            <div>
              <img 
                src={`${process.env.PUBLIC_URL}/assets/child.jpg`}
                alt="Children flourishing in community" 
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
              <h3>A Christ-Centered Community of Flourishing Children</h3>
              <p>
                We envision a world where every child knows they are deeply loved by God, 
                understands their inherent worth and dignity, and has the opportunity to 
                develop their full potential in a safe, nurturing environment.
              </p>
              <p>
                Our vision extends beyond our immediate community - we dream of a network 
                of children's ministries across the Greater Toronto Area and beyond, each 
                serving as a beacon of hope and transformation in their communities.
              </p>
              <p>
                We see children growing into confident, compassionate leaders who carry 
                God's love into every area of their lives - their families, schools, 
                workplaces, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Goals Section */}
      <section className="section" ref={goalsRef}>
        <div className="container">
          <div className="section-header">
            <h2>Our Core Goals</h2>
            <p>Strategic objectives that guide our ministry</p>
          </div>
          <div className={`grid grid-3 ${goalsVisible ? 'reveal active' : 'reveal'}`}>
            <div className="card">
              <h3>Evangelize</h3>
              <p>
                Share the Gospel with children and families in our community and beyond, 
                introducing them to the life-changing love of Jesus Christ through age-appropriate 
                methods and genuine relationships.
              </p>
            </div>
            <div className="card">
              <h3>Educate</h3>
              <p>
                Provide quality educational support and life skills training that empowers 
                children to excel academically and develop practical abilities for successful 
                living.
              </p>
            </div>
            <div className="card">
              <h3>Equip</h3>
              <p>
                Disciple and mentor children to live boldly for Jesus, teaching them biblical 
                principles and helping them develop strong character and leadership skills.
              </p>
            </div>
            <div className="card">
              <h3>Empower</h3>
              <p>
                Provide resources, opportunities, and support that enable children to discover 
                and develop their unique gifts and talents for God's glory.
              </p>
            </div>
            <div className="card">
              <h3>Engage</h3>
              <p>
                Create meaningful connections between children, families, and the broader 
                community, fostering a sense of belonging and mutual support.
              </p>
            </div>
            <div className="card">
              <h3>Expand</h3>
              <p>
                Grow our ministry's reach and impact by developing new programs, partnerships, 
                and opportunities to serve more children and families.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Results Section */}
      <section className="section" ref={impactRef}>
        <div className="container">
          <div className="section-header">
            <h2>Our Impact</h2>
            <p>The difference we're making in children's lives</p>
          </div>
          <div className={`grid grid-4 ${impactVisible ? 'reveal active' : 'reveal'}`}>
            <div className="card text-center">
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>500+</h3>
              <p>Children served annually</p>
            </div>
            <div className="card text-center">
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>50+</h3>
              <p>Volunteers actively involved</p>
            </div>
            <div className="card text-center">
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>15+</h3>
              <p>Years of ministry experience</p>
            </div>
            <div className="card text-center">
              <h3 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '0.5rem' }}>100%</h3>
              <p>Christ-centered approach</p>
            </div>
          </div>
        </div>
      </section>

      {/* Biblical Foundation Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Biblical Foundation</h2>
            <p>Scriptural principles that guide our mission</p>
          </div>
          <div className="grid grid-2">
            <div className="card">
              <h3>"Let the little children come to me"</h3>
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Matthew 19:14
              </p>
              <p>
                Jesus' words remind us of the special place children hold in God's heart. 
                We believe that children are not just the future of the church, but an 
                essential part of the present body of Christ.
              </p>
            </div>
            <div className="card">
              <h3>"Train up a child in the way he should go"</h3>
              <p style={{ fontStyle: 'italic', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                Proverbs 22:6
              </p>
              <p>
                This wisdom guides our approach to children's ministry. We believe in 
                providing intentional, age-appropriate guidance that helps children 
                develop strong spiritual foundations and character.
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
            <p>Be part of transforming children's lives through Christ's love</p>
          </div>
          <div className="flex-center" style={{ gap: '20px', flexWrap: 'wrap' }}>
            <a href="/contact" className="btn btn-primary">Get Involved</a>
            <a href="/services" className="btn btn-secondary">Learn About Our Programs</a>
            <a href="/about" className="btn btn-secondary">Meet Our Team</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
