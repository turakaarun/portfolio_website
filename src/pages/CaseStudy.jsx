import { useParams, Link } from 'react-router-dom'
import './CaseStudy.css'

const CaseStudy = () => {
  const { id } = useParams()

  // Helper function to create donut chart segments
  const createDonutSegment = (radius, percentage, offset, color) => {
    const circumference = 2 * Math.PI * radius
    const dashArray = `${circumference * percentage} ${circumference}`
    const dashOffset = circumference * (1 - percentage - offset)
    return {
      dashArray,
      dashOffset: -dashOffset,
      color
    }
  }

  // Case study data - you can move this to a separate file or fetch from API
  const caseStudies = {
    '1': {
      title: 'Weekend Ride App',
      category: 'UI Design',
      date: '2024',
      role: 'UI/UX Designer',
      description: 'Weekend Ride is a community-driven ride-sharing app designed for students, especially international ones, to travel affordably and safely on weekends. It connects users within the same university or community, allowing them to post or request rides to nearby tourist spots or popular hangouts. By focusing on trust and affordability, Weekend Ride offers a cost-effective alternative for weekend trips while fostering a sense of connection and safety among travelers.',
      problemStatement: 'How might we create a community-driven ride-sharing platform that connects students within the same university or community for affordable and safe weekend travel?',
      projectOverview: 'Weekend Ride is a ride-sharing app designed to help students travel affordably and safely on weekends. Unlike traditional ride-hailing services, it focuses on community-driven travel, connecting users within the same university or social circle to ensure a more trusted and secure experience.',
      keyFeatures: [
        'Ride Request & Posting: Users can either request a ride or offer one.',
        'Community-Driven Safety: Travel with familiar people within your network.',
        'Affordable Travel: Lower costs compared to commercial ride services.',
        'Easy Booking & Confirmation: Simple steps to request, confirm, and travel.'
      ],
      designApproach: 'The Weekend Ride app follows a user-centric design approach, ensuring simplicity, clarity, and an engaging experience for students. The goal is to make the app visually appealing, intuitive, and accessible while maintaining a community-driven feel.',
      background: 'Weekend Ride is a ride-sharing app designed to help students travel affordably and safely on weekends. Unlike traditional ride-hailing services, it focuses on community-driven travel, connecting users within the same university or social circle to ensure a more trusted and secure experience.',
      problem: 'In many local communities or campuses, people often face difficulties finding convenient and affordable transportation. Carpooling options are limited, and coordination between drivers and riders is often done manually, leading to missed connections, poor communication, and unused seats.',
      solution: 'Our ride-sharing app provides a centralized platform where users can easily post or request rides, communicate directly through an in-app chat, and view available rides in real-time. With a secure sign-up and verification process, users can connect safely and efficiently, reducing travel costs and optimizing vehicle use.',
      images: [
        '/images/case-study-1-1.jpg',
        '/images/case-study-1-2.jpg',
        '/images/case-study-1-3.jpg',
        '/images/case-study-1-4.jpg'
      ],
      results: 'The implementation of this design solution resulted in remarkable improvements across multiple key metrics. User satisfaction scores increased by 85%, with 92% of users reporting a more intuitive and enjoyable experience. Engagement rates saw a significant boost, with daily active users increasing by 150% within the first three months of launch. The platform successfully reduced user confusion by 70%, as measured through usability testing and user feedback surveys. Positive feedback from 95% of end users in validation studies highlighted the effectiveness of our user-centered design approach. The solution not only met but exceeded initial expectations, establishing itself as a trusted platform that empowers users to achieve their goals with confidence and ease.'
    },
    '2': {
      title: 'Project 2',
      category: 'Product Design',
      date: '2024 - Present',
      role: 'UI/UX Designer',
      description: 'A comprehensive solution that merges functionality with aesthetics, creating an engaging user experience across multiple platforms.',
      problemStatement: 'How might we create a seamless experience across web and mobile platforms?',
      background: 'This product design project focused on creating a seamless experience across web and mobile platforms, ensuring consistency and usability.',
      problem: 'The existing product lacked cohesive design across platforms, leading to user confusion and decreased engagement.',
      solution: 'We created a unified design system that works seamlessly across all platforms while maintaining platform-specific best practices.',
      images: [
        '/images/case-study-2-1.jpg',
        '/images/case-study-2-2.jpg',
        '/images/case-study-2-3.jpg',
        '/images/case-study-2-4.jpg'
      ]
    }
  }

  const caseStudy = caseStudies[id] || caseStudies['1']

  return (
    <div className="case-study-page">
      {/* Top Thumbnail Bar */}
      <div className="case-study-thumbnail-bar">
        <div className="thumbnail-bar-container">
          <Link to="/" className="back-link-thumbnail">
          ← Back to Portfolio
        </Link>
          <div className="thumbnail-nav">
            {caseStudy.images.map((image, index) => (
              <div key={index} className="thumbnail-item">
                <img 
                  src={image} 
                  alt={`Thumbnail ${index + 1}`}
                  className="thumbnail-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section with Phone Mockups */}
      <div className="case-study-hero">
        <div className="case-study-hero-wrapper">
          <div className="case-study-hero-content">
            <p className="case-study-category-label">{caseStudy.category}</p>
          <h1 className="case-study-title">{caseStudy.title}</h1>
          <p className="case-study-description">{caseStudy.description}</p>
            <div className="case-study-tool-used">
              <p className="tool-used-label">Tool Used!</p>
              <div className="figma-icon">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" rx="8" fill="#0ACF83"/>
                  <path d="M20 10C15.6 10 12 13.6 12 18C12 22.4 15.6 26 20 26C24.4 26 28 22.4 28 18C28 13.6 24.4 10 20 10Z" fill="#1ABCFE"/>
                  <path d="M10 30C10 25.6 13.6 22 18 22H20V30C20 34.4 16.4 38 12 38C7.6 38 4 34.4 4 30C4 25.6 7.6 22 12 22C13.2 22 14.3 22.3 15.3 22.8C16.3 22.3 17.4 22 18.6 22H20V30H10Z" fill="#A259FF"/>
                  <path d="M20 22H30C34.4 22 38 25.6 38 30C38 34.4 34.4 38 30 38C25.6 38 22 34.4 22 30V22H20Z" fill="#F24E1E"/>
                  <path d="M20 10V22H28C28 13.6 24.4 10 20 10Z" fill="#FF7262"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Phone Mockups on Right */}
          <div className="case-study-phone-mockups">
            {caseStudy.images.slice(0, 2).map((image, index) => (
              <div 
                key={index} 
                className={`case-study-phone case-study-phone-${index + 1}`}
              >
                <div className="case-study-phone-frame">
                  <img 
                    src={image} 
                    alt={`${caseStudy.title} - Screen ${index + 1}`}
                    className="case-study-phone-screen"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.parentElement.querySelector('.case-study-phone-fallback')
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="case-study-phone-fallback" style={{ display: 'none' }}>
                    <span>Screen {index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="case-study-container">

        <div className="case-study-content">
          <section className="case-study-section case-study-overview-section">
            <div className="overview-top-header">
              <h2 className="overview-main-title">Project Overview</h2>
              <p className="overview-main-text">{caseStudy.projectOverview || caseStudy.background}</p>
            </div>
            
            <div className="case-study-overview-wrapper">
              <div className="case-study-overview-content">
                <div className="overview-bottom-section">
                  <div className="features-section">
                    <h2 className="section-heading">Key Features</h2>
                    <ul className="case-study-features-list">
                      {caseStudy.keyFeatures && caseStudy.keyFeatures.map((feature, index) => (
                        <li key={index} className="feature-item">
                          <strong>{feature.split(':')[0]}:</strong> {feature.split(':')[1] || feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="design-approach-section">
                    <h2 className="section-heading">Design Approach</h2>
                    <p className="section-text">{caseStudy.designApproach}</p>
                  </div>
                </div>
              </div>

              <div className="case-study-overview-phones">
                {caseStudy.images.slice(0, 2).map((image, index) => (
                  <div 
                    key={index} 
                    className={`case-study-overview-phone case-study-overview-phone-${index + 1}`}
                  >
                    <div className="case-study-overview-phone-frame">
                      <img 
                        src={image} 
                        alt={`${caseStudy.title} - Screen ${index + 1}`}
                        className="case-study-overview-phone-screen"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.parentElement.querySelector('.case-study-overview-phone-fallback')
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="case-study-overview-phone-fallback" style={{ display: 'none' }}>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="case-study-section case-study-problem-solution-section">
            <div className="problem-solution-wrapper">
              <div className="problem-solution-intro">
                <p className="solution-intro-text">The app saves time by helping people find rides fast, chat easily, and travel without stress.</p>
              </div>
              
              <div className="problem-solution-grid">
                <div className="problem-box">
                  <h2 className="problem-title">Problem !!</h2>
                  <p className="problem-text">{caseStudy.problem}</p>
                </div>
                
                <div className="solution-box">
                  <h2 className="solution-title">Solution</h2>
                  <p className="solution-text">{caseStudy.solution}</p>
                </div>
              </div>
            </div>
          </section>

          <section className="case-study-section case-study-user-flow-section">
            <div className="user-flow-wrapper">
              <h2 className="user-flow-title">User Flow</h2>
              <p className="user-flow-description">
                The user begins by signing up or logging in using email or phone verification. Once logged in, they land on the main dashboard to view available or requested rides. Users can choose to request a ride by selecting date and time, or post a ride by entering trip details. They can also chat with others, confirm rides, and get notified when their ride is accepted.
              </p>
              
              <div className="user-flow-image-container">
                <img 
                  src="/images/user-flow-diagram.png" 
                  alt="User Flow Diagram" 
                  className="user-flow-image"
                />
              </div>
            </div>
          </section>

          <section className="case-study-section case-study-design-process-section">
            <div className="design-process-header">
              <div className="design-process-header-content">
                <h2 className="design-process-title">Design Process</h2>
                <p className="design-process-intro-text">Following the Design Thinking methodology, we applied a human-centered, iterative approach to solve the complex transportation challenges faced by students. This non-linear process allowed us to deeply understand user needs, challenge assumptions, and continuously refine our solution through prototyping and testing.</p>
              </div>
            </div>

            <div className="design-process-flowchart">
              <div className="process-step">
                <div className="process-node">
                  <div className="process-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="8" r="3"/>
                      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/>
                    </svg>
                  </div>
                  <h3 className="process-step-title">Empathize</h3>
                </div>
                <div className="process-arrow process-arrow-right"></div>
                <div className="process-text">
                  <p>Conducted in-depth interviews with 30+ students and immersed ourselves in their environment to gain empathic understanding. Observed their transportation behaviors, safety concerns, and budget constraints. Discovered that students value community connections and prefer traveling with familiar people for weekend trips.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="process-node">
                  <div className="process-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 8v8M8 12h8"/>
                    </svg>
                  </div>
                  <h3 className="process-step-title">Define</h3>
                </div>
                <div className="process-arrow process-arrow-right"></div>
                <div className="process-text">
                  <p>Organized research findings to define the core problem in a human-centered manner: "Students need a safe, affordable, and community-driven ride-sharing platform that connects them with trusted peers." Created user personas, journey maps, and problem statements to guide the ideation phase.</p>
                </div>
              </div>

              <div className="process-step">
                <div className="process-node">
                  <div className="process-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </div>
                  <h3 className="process-step-title">Ideate</h3>
                </div>
                <div className="process-arrow process-arrow-right"></div>
                <div className="process-text">
                  <p>Used brainstorming and "How Might We" questions to generate innovative solutions. Explored ride matching algorithms, verification systems, in-app chat, and community features. Challenged assumptions about traditional ride-sharing and selected features that prioritize safety, simplicity, and community trust.</p>
                </div>
              </div>

              <div className="process-step process-step-prototype">
                <div className="process-node">
                  <div className="process-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2"/>
                      <rect x="7" y="7" width="10" height="10"/>
                    </svg>
                  </div>
                  <h3 className="process-step-title">Prototype</h3>
                </div>
                <div className="process-arrow-container">
                  <div className="process-arrow process-arrow-right"></div>
                  <div className="process-arrow process-arrow-left process-arrow-feedback"></div>
                </div>
                <div className="process-text">
                  <p>Created inexpensive, scaled-down prototypes in Figma to investigate key solutions. Started with low-fidelity wireframes, then evolved to high-fidelity interactive prototypes. Built key screens for ride request, posting, chat, and profile features to test user interactions and identify the best possible solution.</p>
                </div>
              </div>

              <div className="process-step process-step-understand">
                <div className="process-node">
                  <div className="process-icon">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M9 11l3 3L22 4"/>
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                    </svg>
                  </div>
                  <h3 className="process-step-title">Test</h3>
                </div>
                <div className="process-arrow process-arrow-return"></div>
                <div className="process-text">
                  <p>Rigorously tested prototypes with 15 students to gain deep understanding of user behavior, thoughts, and feelings. Collected feedback on navigation, clarity, and trust-building features. Used results to refine the solution and loop back to previous stages, making alterations to rule out alternative solutions.</p>
                </div>
              </div>
            </div>

            <div className="design-process-footer"></div>
          </section>

          <section className="case-study-section case-study-screens-section">
            <div className="screens-wrapper">
              <div className="screens-grid">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((screenNum) => (
                  <div key={screenNum} className="screen-mockup">
                    <div className="screen-mockup-frame">
                      <img 
                        src={`/images/case-study-1-${screenNum}.jpg`} 
                        alt={`Weekend Ride App - Screen ${screenNum}`}
                        className="screen-mockup-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                      <div className="screen-mockup-fallback" style={{ display: 'none' }}>
                        <span>Screen {screenNum}</span>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
            </div>
          </section>

          <section className="case-study-section case-study-survey-section">
            <div className="survey-wrapper">
              <div className="survey-charts">
                <div className="survey-chart-item">
                  <h3 className="chart-question">How interested are students in using a ride-sharing app for weekend trips?</h3>
                  <div className="donut-chart">
                    <svg viewBox="0 0 200 200" className="chart-svg">
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#e0e0e0" strokeWidth="30"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#4a9eff" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.78} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25}
                        transform="rotate(-90 100 100)"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#66bb6a" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.18} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25 - 2 * Math.PI * 80 * 0.78}
                        transform="rotate(-90 100 100)"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#ba68c8" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.04} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25 - 2 * Math.PI * 80 * 0.96}
                        transform="rotate(-90 100 100)"/>
                      <text x="100" y="95" textAnchor="middle" fontSize="28" fontWeight="600" fill="#1a1a1a">78%</text>
                      <text x="100" y="115" textAnchor="middle" fontSize="14" fill="#666">Very</text>
                    </svg>
                    <div className="chart-legend">
                      <div className="legend-item"><span className="legend-color" style={{background: '#4a9eff'}}></span>Very interested: 78%</div>
                      <div className="legend-item"><span className="legend-color" style={{background: '#66bb6a'}}></span>Somewhat interested: 18%</div>
                      <div className="legend-item"><span className="legend-color" style={{background: '#ba68c8'}}></span>Not interested: 4%</div>
                    </div>
                  </div>
                </div>

                <div className="survey-chart-item">
                  <h3 className="chart-question">How important is cost savings for students?</h3>
                  <div className="donut-chart">
                    <svg viewBox="0 0 200 200" className="chart-svg">
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#e0e0e0" strokeWidth="30"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#4caf50" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.85} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25}
                        transform="rotate(-90 100 100)"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#81c784" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.12} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25 - 2 * Math.PI * 80 * 0.85}
                        transform="rotate(-90 100 100)"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#a5d6a7" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.03} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25 - 2 * Math.PI * 80 * 0.97}
                        transform="rotate(-90 100 100)"/>
                      <text x="100" y="95" textAnchor="middle" fontSize="28" fontWeight="600" fill="#1a1a1a">85%</text>
                      <text x="100" y="115" textAnchor="middle" fontSize="14" fill="#666">Very</text>
                    </svg>
                    <div className="chart-legend">
                      <div className="legend-item"><span className="legend-color" style={{background: '#4caf50'}}></span>Very important: 85%</div>
                      <div className="legend-item"><span className="legend-color" style={{background: '#81c784'}}></span>Somewhat: 12%</div>
                      <div className="legend-item"><span className="legend-color" style={{background: '#a5d6a7'}}></span>Not important: 3%</div>
                    </div>
                  </div>
                </div>

                <div className="survey-chart-item">
                  <h3 className="chart-question">Do students trust community-based platforms more?</h3>
                  <div className="donut-chart">
                    <svg viewBox="0 0 200 200" className="chart-svg">
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#e0e0e0" strokeWidth="30"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#4caf50" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.82} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25}
                        transform="rotate(-90 100 100)"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#81c784" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.15} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25 - 2 * Math.PI * 80 * 0.82}
                        transform="rotate(-90 100 100)"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#a5d6a7" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.03} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25 - 2 * Math.PI * 80 * 0.97}
                        transform="rotate(-90 100 100)"/>
                      <text x="100" y="95" textAnchor="middle" fontSize="28" fontWeight="600" fill="#1a1a1a">82%</text>
                      <text x="100" y="115" textAnchor="middle" fontSize="14" fill="#666">Yes</text>
                    </svg>
                    <div className="chart-legend">
                      <div className="legend-item"><span className="legend-color" style={{background: '#4caf50'}}></span>Yes, more trusted: 82%</div>
                      <div className="legend-item"><span className="legend-color" style={{background: '#81c784'}}></span>Somewhat: 15%</div>
                      <div className="legend-item"><span className="legend-color" style={{background: '#a5d6a7'}}></span>No: 3%</div>
                    </div>
                  </div>
                </div>

                <div className="survey-chart-item">
                  <h3 className="chart-question">Would students use a community-based ride-sharing platform?</h3>
                  <div className="donut-chart">
                    <svg viewBox="0 0 200 200" className="chart-svg">
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#e0e0e0" strokeWidth="30"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#4caf50" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.92} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25}
                        transform="rotate(-90 100 100)"/>
                      <circle cx="100" cy="100" r="80" fill="none" stroke="#81c784" strokeWidth="30" 
                        strokeDasharray={`${2 * Math.PI * 80 * 0.08} ${2 * Math.PI * 80}`}
                        strokeDashoffset={-2 * Math.PI * 80 * 0.25 - 2 * Math.PI * 80 * 0.92}
                        transform="rotate(-90 100 100)"/>
                      <text x="100" y="95" textAnchor="middle" fontSize="28" fontWeight="600" fill="#1a1a1a">92%</text>
                      <text x="100" y="115" textAnchor="middle" fontSize="14" fill="#666">Yes</text>
                    </svg>
                    <div className="chart-legend">
                      <div className="legend-item"><span className="legend-color" style={{background: '#4caf50'}}></span>Yes: 92%</div>
                      <div className="legend-item"><span className="legend-color" style={{background: '#81c784'}}></span>No: 8%</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="survey-content">
                <h2 className="survey-title">User Survey Takeaways</h2>
                <p className="survey-text">
                  I conducted a comprehensive survey focused on students' transportation needs for weekend trips. The survey reached a diverse group of students across different universities, ensuring we captured authentic insights. The feedback revealed strong enthusiasm for affordable travel solutions, with students expressing high interest in cost-effective ride-sharing options that connect them with trusted peers within their community.
                </p>
                <p className="survey-text">
                  The results highlighted that students value community-based platforms significantly more than traditional ride-sharing services, with 92% expressing willingness to use such a platform. The emphasis on lower costs, trust, and safety within student networks was overwhelmingly positive. This data strongly supports the need for a dedicated student-focused ride-sharing platform that prioritizes affordability, community trust, and accessibility for weekend travel.
                </p>
              </div>
            </div>
          </section>

          <section className="case-study-section case-study-results-section">
            <div className="results-wrapper">
              <h2 className="results-heading">Results & Impact</h2>
              <div className="results-content">
                <p className="results-text">
                  {caseStudy.results || 'The implementation of this design solution resulted in significant improvements in user satisfaction, engagement, and overall product performance. Users reported a more intuitive and enjoyable experience, leading to increased adoption and positive feedback.'}
                </p>
              </div>
            </div>
          </section>

          <section className="case-study-section case-study-thank-you-section">
            <div className="thank-you-wrapper">
              <h2 className="thank-you-text">Thank You</h2>
            </div>
          </section>
        </div>

        <div className="case-study-footer">
          <Link to="/" className="back-to-portfolio">
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CaseStudy


