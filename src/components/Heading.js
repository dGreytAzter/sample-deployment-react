import {Container, Nav, Navbar, NavDropdown,} from 'react-bootstrap';
import HeaderImage from "./../img/1.png"

const Heading  = () => {
    return ( 
        <div>
            <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Magic</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#">Cards</Nav.Link>
            <Nav.Link href="#">Yoyo</Nav.Link>
            <Nav.Link href="#">Sugar</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <img src={HeaderImage} className='w-100' alt='demon slayer group' />
        </div>
     );
}

export default Heading;