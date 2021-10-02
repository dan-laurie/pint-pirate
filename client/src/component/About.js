import React from 'react' 

const About = () => {
  return (
    <div className="site-wrapper">
      <div className="about-page">
        <div className="about-info d-flex flex-column">
          <h1>About</h1>
          <hr />
          <p>Welcome to Pint Pirate! <br /> A project created during General Assembly&apos;s SEI by Dan, Wala, Kwasi.<br />
        A simple easy to use web application to find the cheapest pint in all major UK cities. <br />Feel free to add cities that are not on the database or simply share your drinking expriences at different cities!
          </p>
          <div className="tech">
            <h3>Technologies Used</h3>
            <hr />
            <div className="bullet-list d-flex justify-content-center">
              <i className="devicon-html5-plain-wordmark colored"></i>
              <i className="devicon-sass-original colored"></i>
              <i className="devicon-css3-plain-wordmark colored"></i>
              <i className="devicon-bootstrap-plain-wordmark colored"></i>
              <i className="devicon-javascript-plain colored"></i>
              <i className="devicon-react-original-wordmark colored"></i>
              <i className="devicon-nodejs-plain colored"></i>
              <i className="devicon-express-original colored"></i>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
              <i className="devicon-yarn-plain-wordmark colored"></i>
              <i className="devicon-npm-original-wordmark colored"></i>
            </div>
          </div>
          <div className="contact-info">
            <div className="dan-info">
              <h3>Dan</h3>
              <hr />
              <a href=""></a>
            </div>
            <div className="wala-info">

            </div>
            <div className="kwasi-info">

            </div>
          </div>
        </div>    
      </div>
    </div>
  )
}
export default About