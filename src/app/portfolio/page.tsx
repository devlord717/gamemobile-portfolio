import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
{/* 
          <div className="row">
            <div className="portfolio-filter padd-15">
              <button type="button" className="active" data-filter="all">
                All
              </button>
              <button type="button" data-filter="graphics-design">
                Graphics Design
              </button>
              <button type="button" data-filter="web-design">
                Web Design
              </button>
              <button type="button" data-filter="wordpress">
                Wordpress
              </button>
            </div>
          </div> */}

          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/Ether-Legends.webp" alt="portfolio" />
                </div>
                <a href="https://cafebazaar.ir/app/com.etherlegends?l=en " >
                <div className="portfolio-info">
                  <h4>Ether Legends</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/FSK.webp" alt="portfolio" />
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.bambamtastic.fsk&hl=en_US " >
                <div className="portfolio-info">
                  <h4>Find, Serve, and Keep</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/Peanut-Butter.webp" alt="portfolio" />
                </div>
                <a href="https://play.google.com/store/apps/details?id=com.app.doodlapp&hl=en " >
                <div className="portfolio-info">
                  <h4>Peanut Butter Park</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/warehouse_space_saving.png" alt="portfolio" />
                </div>
                <a href="/" >
                <div className="portfolio-info">
                  <h4>Warehouse Space Saving App</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/cargo_system.png" alt="portfolio" />
                </div>
                <a href="/" >
                <div className="portfolio-info">
                  <h4>Cargo System</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}
            
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/neno_iceland.jpg" alt="portfolio" />
                </div>
                <a href="https://neno.techstate.io/" >
                <div className="portfolio-info">
                  <h4>Neno Iceland</h4>
                  <div className="icon">
                    <i className="fa fa-search" />
                  </div>
                </div>
                </a>
              </div>
            </div>
            {/* Portfolio Item End*/}            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
