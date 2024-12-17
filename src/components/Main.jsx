import profilePic from "../assets/img/me.webp";

export const Main = () => {
  return (
    <main className="wrapper container">
      <section
        id="skills-section"
        className="skills-section section text-center"
      >
        <h2 className="section-title">Tools & Tech</h2>
        <div className="other-skills">
          <div className="misc-skills">
            <span className="skill-tag">React</span>
            <span className="skill-tag">JavaScript / TypeScript</span>
            <span className="skill-tag">CSS / SASS</span>
            <span className="skill-tag">Bootstrap</span>
            <span className="skill-tag">HTML5</span>
            <span className="skill-tag">PHP</span>
          </div>
        </div>
      </section>

      <section id="contact-section" className="contact-section section">
        <h2 className="section-title">Let's Work Together!</h2>
        <div className="intro">
          <img
            className="profile-image img-rounded"
            src={profilePic}
            alt="Profilbild von Webentwickler Robert Heinemann"
          />
          <div className="dialog">
            <p>
              Contact me per E-Mail:{" "}
              <a href="mailto:rheinemann97@icloud.com">
                rheinemann97@icloud.com
              </a>
            </p>
            <p>or via:</p>
            <ul className="social list-inline d-flex gap-2">
              <li>
                <a
                  href="https://www.linkedin.com/authwall?trk=gf&trkInfo=AQE_kpt3Ti-s2wAAAW2I5dognmDD8csdgmJ69IMix-7FT0TYhUXReOm9sK8E6U8x5WHAVloC3TNU4wQpxH6zathz19VjLsyn9u7YGG_7_y-2hYcdDDthfOfa4J2xfGllKPxrqkw=&originalReferer=https://www.google.com/&sessionRedirect=https%3A%2F%2Fde.linkedin.com%2Fin%2Frobert-heinemann-0501a5193"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/therobhe"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-github-alt" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};
