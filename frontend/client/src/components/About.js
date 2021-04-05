import React from 'react';
import '../style/About.css';
import ReactPlayer from 'react-player';
export const About = () => {
  return (
    <body>
      <div className=" container">
        <h1 style={{ textAlign: 'center', color: 'black' }}>About us</h1>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ReactPlayer
            width="1000px"
            height="500px"
            url="https://www.youtube.com/watch?v=Rnotc_n_dvA"
          />
        </div>
        <div className="row" style={{ marginTop: 40 }}>
          <div className="col-lg-5">
            <img src="/aboutimg.jpeg" className="img-fluid" />
          </div>
          <p className="text col-lg-7 " style={{ fontSize: '20px' }}>
            Our team WeCode understands the goals and is committed to attaining
            them. This clear direction and agreement on mission and purpose are
            essential for effective teamwork. Team members must have an overall
            mission that is agreed upon and that provides the umbrella for all
            that the team tries to do.
            <div className="advance" style={{ marginTop: 40 }}>
              <span style={{ fontFamily: 'roboto' }}>January 2021</span>
              <span style={{ fontFamily: 'roboto' }}>+50 car </span>
            </div>
            <div className="advance">
              <span
                style={{
                  fontFamily: 'roboto',
                  color: '##161431',
                  fontWeight: '300',
                }}
              >
                Smart Delivery is born
              </span>
              <span
                style={{
                  fontFamily: 'roboto',
                  color: '##161431',
                  fontWeight: '300',
                }}
              >
                Equipped With Our Solution
              </span>
            </div>
          </p>
        </div>
        {/* <br />
        <br />
        <br />
        <br /> */}
        <div className="row " style={{ marginTop: 30 }}>
          <p className="text col-lg-7  " style={{ fontSize: '20px' }}>
            Our application smart delivery can offer to the client the
            accessibility to choose the company to affect his delivery .And with
            this application the client can save time and stay home in this
            health situation (COVID 19) and can offer either to the delivery man
            the optimized route and solve the car route problem
          </p>
          <div className="col-lg-5">
            <img src="/aboutimg1.jpg" className="img-fluid" />
          </div>
        </div>
      </div>
    </body>
  );
};
