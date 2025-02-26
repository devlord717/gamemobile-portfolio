import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    {/* I am Iulian Plamadeala a <span>Senior Software Developer</span> */}
                    <span>Talent Full-Stack & MobileGame developer</span>
                  </h2>
                  <p>
                    Accomplished Full-Stack and Mobile Developer with 5+ years of experience, specializing in Flutter, Laravel, Vue.js, React, PHP, and Node.js. Proven expertise in building scalable web applications, high-performance mobile apps, and blockchain-integrated games. Skilled in MySQL, MongoDB, RESTful APIs, and real-time systems, with experience deploying cloud-based solutions using AWS, Azure, Docker, and CI/CD pipelines. Adept at solving complex challenges, optimizing architectures, and delivering seamless user experiences across gaming, logistics, and e-commerce industries. Passionate about cutting-edge technology, innovation, and crafting robust, scalable solutions.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    {/* <div className="info-item padd-15">
                      <p>
                        Website : <span>www.piulian.vercel.app</span>
                      </p>
                    </div> */}
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>atlifreyr000219@outlook.com</span>
                      </p>
                    </div>
                    {/* <div className="info-item padd-15">
                      <p>
                        Degree : <span>Bachelor&lsquo;s Degree</span>
                      </p>
                    </div> */}
                    <div className="info-item padd-15">
                      <p>
                        Phone : <span>+354 751-8039</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Reykjavík, Iceland </span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="docs/resume.pdf"
                        target="_blank"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">

                     <div className="skill-item padd-15">
                      <h5>React</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>

                    <div className="skill-item padd-15">
                      <h5>Vue + Laravel</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>


                    <div className="skill-item padd-15">
                      <h5>Unity</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "100%" }} />
                        <div className="skill-percent">100%</div>
                      </div>
                    </div>

                    <div className="skill-item padd-15">
                      <h5>Kotlin</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>

                    <div className="skill-item padd-15">
                      <h5>Swift</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "75%" }} />
                        <div className="skill-percent">75%</div>
                      </div>
                    </div>

                    <div className="skill-item padd-15">
                      <h5>Flutter</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">90%</div>
                      </div>
                    </div>

                    <div className="skill-item padd-15">
                      <h5>React Native</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "70%" }} />
                        <div className="skill-percent">70%</div>
                      </div>
                    </div>

                    <div className="skill-item padd-15">
                      <h5>Node.js</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "80%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>

                    <div className="skill-item padd-15">
                      <h5>Firebase</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "85%" }} />
                        <div className="skill-percent">80%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Apr 2018 - Sep 2021
                          </h6>
                          <h4 className="timeline-title">
                            Reykjavik University
                          </h4>
                          <h4 className="timeline-subtitle">
                            Bachelor &lsquo;s Degree in Computer Science
                          </h4>
                          <p className="timeline-text">
                            Passionate about Android application development and also available to learn
                            new Mobile Technologies.<br />
                            Liked to play mobile games and developing games with Unity.<br />
                            Had a bit exp in iPhone and Window app development.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">

                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> Sep 2022 - Dec 2024
                          </h6>
                          <h4 className="timeline-title">Software Developer </h4>
                          <h4 className="timeline-subtitle">TekRevol</h4>
                          <h5 className="timeline-subtitle">Houston, TX, USA | Remote</h5>
                          <br />
                          <p className="timeline-text">
                            •	Developed blockchain-integrated mobile apps with wallet connectivity and real-time features.<br />
                            •	Optimized backend systems to enhance app scalability and stability.<br />
                            •	Implemented gamification and refined UI/UX for improved user engagement.<br />
                            •	Collaborated with teams to deliver high-quality, client-focused solutions.<br />
                          </p>
                        </div>
                        {/* Timeline Item end */}

                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> May 2021 - Aug 2022
                          </h6>
                          <h4 className="timeline-title">Software Developer </h4>
                          <h4 className="timeline-subtitle">TekRevol</h4>
                          <h5 className="timeline-subtitle">Reykjavík, Iceland | On-Site</h5>
                          <br />
                          <p className="timeline-text">
                            •	Built modular systems for logistics and inventory management with real-time tracking.<br />
                            •	Designed user-friendly e-commerce platforms with seamless functionality.<br />
                            •	Optimized system architecture and implemented scalable, cloud-based solutions.<br />
                            •	Delivered tailored software to streamline client operations efficiently.<br />
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
