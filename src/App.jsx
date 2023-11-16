import './App.css'
import { useState, useEffect, useMemo } from "react";
// import Navbar from '../components/Navbar';

function Portfolio() {
  const [currentDay, setCurrentDay] = useState("");
  const [currentUTCTime, setCurrentUTCTime] = useState("");

  const daysOfWeek = useMemo(() => [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ], []);

  useEffect(() => {
    const updateClock = () => {
      const currentDate = new Date();
      const gmtPlus1Offset = 60;
      currentDate.setMinutes(currentDate.getMinutes() + gmtPlus1Offset);

      const currentDayIndex = currentDate.getUTCDay();
      const day = daysOfWeek[currentDayIndex];
      const hours = currentDate.getUTCHours().toString().padStart(2, "0");
      const minutes = currentDate.getUTCMinutes().toString().padStart(2, "0");
      const seconds = currentDate.getUTCSeconds().toString().padStart(2, "0");
      const currentTime = `${hours}:${minutes}:${seconds}`;

      setCurrentDay(day);
      setCurrentUTCTime(currentTime);
    };

    // Initial update
    updateClock();

    // Update the clock every second
    const intervalID = setInterval(updateClock, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(intervalID);
  }, [daysOfWeek]);

  return (
    <div className="container">
      {/* <Navbar /> */}
      <h1>My Portfolio</h1>
      <img
        src="1691505502695.jpg"
        alt="Ted"
        data-testid="slackDisplayImage"
        className="profile-image"
      />
      <h1>Tedunjaye Olaniyi Emmanuel</h1>
      {/* <div className='details'>
        <h5>+44 7587932589</h5>
        <h5>otedunjaye@gmail.com</h5>
      </div> */}

      <div>
        <span data-testid="currentDayOfTheWeek"></span>
        <span data-testid="currentUTCTime"></span>
      </div>

      <h2>Front-End Developer</h2>

      <p className="github-link">
        <a href="https://github.com/Tedunjaye/Frontend-profile-page">
          GitHub Repository
        </a>
      </p>

      <div>
        <span>{currentDay}</span> &nbsp; 
        <span>{currentUTCTime}</span>
      </div>
      {/* <header>
        <nav>
          <ul>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header> */}

      {/* About section */}
      <section id="about">
        <h1>About Me</h1>
        <p>
          {`Hi, I'm Tedunjaye Olaniyi Emmanuel. I'm a passionate frontend developer with a keen interest in creating
          user-friendly and responsive web applications.`}
        </p>
        {/* Add more details about yourself */}
      </section>

      {/* Skills section */}
      <section id="skills">
        <h1>Skills</h1>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>Typescript</li>
          <li>TailwindCSS</li>
          <li>Redux</li>
        </ul>
      </section>

      {/* Projects section */}
      <section id="projects" className="section">
          <h1>Projects</h1>
          <div className="projects-container">

            <div className="project">
              <h2>YouTwob</h2>
              <p>A YouTube clone project</p>
              <div className="demo-links">
                <a href="https://youtwob.netlify.app">#Link</a> 
              </div>
              <div className="demo-placeholder">
                <iframe src="https://youtwob.netlify.app" title="Demo"></iframe>
              </div>
            </div>

            <div className="project">
              <h2>Pay-Ment</h2>
              <p>A card payment page that checkes the type of card inputed and confirms the required details before confirming the payment.</p>
              <div className="demo-links">
                <a href="https://pay-ment.netlify.app">#Link</a>
              </div>
              <div className="demo-placeholder">
                <iframe src="https://pay-ment.netlify.app" title="Demo"></iframe>
              </div>
            </div>

            <div className="project">
              <h2>Repository Viewer</h2>
              <p>{`Make a search of any github repository with just the individual's username.`}</p>
              <div className="demo-links">
                <a href="https://github-view-repo.netlify.app">#Link</a>
              </div>
              <div className="demo-placeholder">
                <iframe src="https://github-view-repo.netlify.app" title="Demo"></iframe>
              </div>
            </div>

            <div className="project">
              <h2>Stormbnb</h2>
              <p>{`An AirBnb clone site.`}</p>
              <div className="demo-links">
                <a href="https://stormbnb.netlify.app">#Link</a>
              </div>
              <div className="demo-placeholder">
                <iframe src="https://stormbnb.netlify.app" title="Demo"></iframe>
              </div>
            </div>

            <div className="project">
              <h2>Maths Game</h2>
              <p>{`A multiplication game.`}</p>
              <div className="demo-links">
                <a href="https://gentle-lily-af68d7.netlify.app">#Link</a>
              </div>
              <div className="demo-placeholder">
                <iframe src="https://gentle-lily-af68d7.netlify.app" title="Demo"></iframe>
              </div>
            </div>

            <div className="project">
              <h2>Clock</h2>
              <p>{`A digital clock.`}</p>
              <div className="demo-links">
                <a href="https://digital-clock-am-pm.netlify.app">#Link</a>
              </div>
              <div className="demo-placeholder">
                <iframe src="https://digital-clock-am-pm.netlify.app" title="Demo"></iframe>
              </div>
            </div>
  
        </div>
      </section>

      {/* Contact section */}
      {/* <section id="contact" className='contact'>
        <h1>Contact Me</h1>
        <form>
          <input type="text" placeholder="name" name="name" />
          <input type="email" placeholder="email" name="email" />
          <textarea placeholder="message" name="message"></textarea>
          <button type="submit">Send</button>
        </form>
      </section> */}


      <footer>
        <p>&copy; 2023 Tedunjaye Olaniyi Emmanuel</p>
      </footer>
    </div>
  );
}

export default Portfolio;
