import React from 'react';
import firstcarousel from '../assets/firstcarousel.jpg';
import track from '../assets/track.jpeg';
import delivery from '../assets/deliveryman.jpeg';
import delivery1 from '../assets/delivery1.jpeg';
import employe from '../assets/employe.jpeg';
import team from '../assets/team.jpeg';
import { Carousel, Card } from 'react-bootstrap';
import '../style/Home.css';
const Companyhome = () => {
  return (
    <>
      <h1 id="home">Wellcome To Your Workspace</h1>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={delivery} alt="First slide" />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={delivery1} alt="Second slide" />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={track} alt="Third slide" />

          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>

      <>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div class="card">
                <img
                  class="card-img-top"
                  src={delivery1}
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h5 class="card-title">Reviews</h5>
                  <p class="card-text">
                    It was a good experience working for that company because I
                    did learn a lot and I appreciate everything and just looking
                    for work where I work with a team and deal with customers
                  </p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card">
                <img class="card-img-top" src={team} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Company Service</h5>
                  <p class="card-text">
                    {' '}
                    Our company is recognized for the quality of its services.
                    It is a daily commitment on the part of our company to
                    ensure the satisfaction of the customers of our customers.
                    The strengths of the network are the people, the equipment
                    and the work processes.
                  </p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-sm">
              <div class="card">
                <img class="card-img-top" src={employe} alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">Employee of the Month</h5>
                  <p class="card-text">
                    Congratulations! You are smart delivery’s Employee of the
                    month! We’ve recognized how hard you’ve been working . It
                    took a lot of effort and time to offre this kind off service
                    , organize all the activities and do it all on a
                    high-quality level.
                  </p>
                  {/* <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Companyhome;
