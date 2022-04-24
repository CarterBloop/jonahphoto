import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Film.css'

function Film() {
  return (
    <>
      <Nav justify variant="tabs" activeKey="2">
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
      <video controls width="1080">
        <source src="https://jonahsaffranphotos.s3.us-west-1.amazonaws.com/img/finished+panama+edit.mp4" type="video/mp4"/>
      </video>
    </>
  );
}
export default Film;