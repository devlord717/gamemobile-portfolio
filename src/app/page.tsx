
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/Atli-Freyr.jpg"
              alt="Atli Freyr Hallbjornsson's profile"
              className="shadow-dark"
            />
            <h1>Atli Freyr Hallbjornsson</h1>
            <p>Senior Software Developer</p>
            <div className="social-links">
              <a href="mailto:atlifreyr000219@outlook.com" target="_blank">
                <i className="fa fa-envelope" />
              </a>
              <a href="https://www.linkedin.com/in/atli-freyr-hallbjornsson-1647b0345/ " target="_blank">
                <i className="fa fa-linkedin" />
              </a>              
              <a href="https://join.skype.com/invite/krAsnBfdguKd" target="_blank">
                <i className="fa fa-skype" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
