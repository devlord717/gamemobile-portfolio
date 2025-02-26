import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Frontend development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-paint-brush" /></div>
          <h4>Frontend Development</h4>
          <p>Builds responsive and interactive UIs using Vue.js, React, and modern frameworks. <br/>
            Focuses on user experience, state management, and real-time updates.
          </p>
        </div>
      </div>
      {/* Service Item 1 End */}

      {/* Service Item 2: Backend development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-cogs" /></div>
          <h4>Backend Development</h4>
          <p>Develops scalable APIs and server-side applications with Laravel, Node.js, and PHP.<br/>
          Manages databases, authentication, and cloud services.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}

      {/* Service Item 3: Software development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-window-maximize" /></div>
          <h4>Software Development</h4>
          <p>Creates full-stack solutions by integrating frontend, backend, and cloud.<br/>
          Optimizes architecture, performance, and security for scalable applications.
          </p>
        </div>
      </div>
      {/* Service Item 3 End */}

      {/* Service Item 1: Mobile App Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-mobile" /></div>
          <h4>Mobile App Development</h4>
          <p>
            Focuses on creating software application that run on mobile devices
            like smartphones and tablets. Cross-platform projects using Flutter.
        </p>
        </div>
      </div>
      {/* Service Item 1 End */}

      {/* Service Item 2: Android Engineering*/}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-wrench" /></div>
          <h4>Android Engineering</h4>
          <p>Speicalizes in bulding a in app for the Android platform using languages like Java and Kotlin,
            involves developing features like location services, background processing, and push notifications.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}

      {/* Service Item 3: Game developemtn */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-gamepad" /></div>
          <h4>Game development</h4>
          <p>Focuses on creating 2D & 3D games using Unity, a popular game engine. <br/>
            Involves creating game mechanics, interactive env, AI, and multiplayer networking.
          </p>
        </div>
      </div>
      {/* Service Item 3 End */}
    </div>
  </div>
</section>

    </>
  );
};

export default Service;
