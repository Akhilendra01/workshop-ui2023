import { Button } from "@material-ui/core";
import { fontSize } from "@mui/system";
import React from "react";

const date1 = "09 Sep - 10 Sep 2023";
const date2 = "16 Sep - 17 Sep 2023";

const LandingPage: React.FC = () => {
  return (
    <section className="landing-section">
      <div className="landing-bg"></div>
      <div>
        <div className="landing-content">
          <div className="hero-sponsors">
            <a>
              <img src="images/iste-white.svg" alt="iste" width="300px" />
            </a>
            {/* <h1 style={{ margin: '0 20px', color: 'white', fontSize: '32px' }}>
              &
            </h1> */}
            <a>
              {/* <img src='images/codingninja.png' alt='title-sponsor' width='150px' /> */}
            </a>
          </div>
          <h4>
            <span style={{ fontSize: "20px" }}>Present</span>
          </h4>
          <h2>
            FLAIR <span>HAVEN</span>
          </h2>
          <h6 style={{ margin: "0 0 0 0" }}>Workshop 1: {date1}</h6>
          <h6>Workshop 2: {date2}</h6>

          {/* <a className="btn btn_hover" href="/register">
            Register Now
          </a> */}

          {/* <a className="btn btn_hover" href="/register" target='_blank'>
            Register for both
          </a> */}
          <Button>
            <a
              className="btn btn_hover"
              href="https://unstop.com/o/oRQ2J9W?lb=ZtalcWM"
              target="_blank"
            >
              Register Web Development
            </a>
          </Button>
          <Button>
            <a
              className="btn btn_hover"
              href="https://unstop.com/o/Qu3RTqU?lb=ZtalcWM"
              target="_blank"
            >
              Register DSA Workshop
            </a>
          </Button>
          <Button>
            <a
              className="btn btn_hover"
              href="https://unstop.com/o/4SgCQoR?lb=ZtalcWM"
              target="_blank"
            >
              Register for both
            </a>
          </Button>
          {/* <h6 style={{ color: 'white'}}>Registrations are now closed</h6> */}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
