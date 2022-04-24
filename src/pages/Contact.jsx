import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Contact.css'
function Contact() {
  return (
    <>
      <Nav justify variant="tabs" activeKey="3">
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
      <div className="contact-container">
        <div className="contact-card">
          <Card >
            <Card.Body>Instagram: @jonahsaffran</Card.Body>
          </Card>
        </div>
        <div className="contact-card"></div>
        <Card >
          <Card.Body>Email: jonahsaffran@gmail.com </Card.Body>
        </Card>
      </div>
    </>
  );
}
export default Contact;