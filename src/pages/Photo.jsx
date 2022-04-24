import Carousel from 'react-bootstrap/Carousel';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Photo.css'




function Photo() {
  return (
    <>
      <Nav justify variant="tabs" activeKey="1">
        <Nav.Item>
          <Nav.Link as={Link} to="/" eventKey="1">Photography</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/film" eventKey="2">Film</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/Contact" eventKey="3"> Contact </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="Carousel-container">
        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/beck1.jpg"
              alt="Slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/P1055040.00_00_06_29.Still001.jpg"
              alt="Slide"
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/P1055040.00_00_06_32.Still002.jpg"
              alt="slide"
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/P1055040.00_00_06_34.Still003.jpg"
              alt="slide"
              loading="lazy"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Carousel-container">
        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/P1055088.00_00_03_25.Still004-2.jpg"
              alt="Slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/P1055180.jpg"
              alt="Slide"
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/P1055088.00_00_25_18.Still009-2.jpg"
              alt="slide"
              loading="lazy"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Carousel-container">
        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/lane-1.png"
              alt="Slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/collage 4-4.png"
              alt="Slide"
              loading="lazy"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Carousel-container">
        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/Panama2.jpg"
              alt="Slide"
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/Panama3.jpg"
              alt="slide"
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/Panama4.jpg"
              alt="slide"
              loading="lazy"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Carousel-container">
        <Carousel indicators={false}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/sam 04.jpg"
              alt="Slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/sam 05.jpg"
              alt="Slide"
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/ben backside windup.jpg"
              alt="slide"
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/ben good backside wind up.jpg"
              alt="slide"
              loading="lazy"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/real sam air.jpg"
              alt="slide"
              loading="lazy"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
}
export default Photo;