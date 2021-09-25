import { Navbar,Container, Nav,NavDropdown} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Navbar.module.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';

const Boxs = () => {
    return(
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><h1>CR7</h1></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link id={styles.heading} href="/" ><h5>Home</h5></Nav.Link>
      <Nav.Link href="/about" ><h5>About</h5></Nav.Link>
      <Nav.Link  href="/contact"><h5>Contact</h5></Nav.Link>
      <NavDropdown title="Products" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link  id={styles.icon}href="#features"><TwitterIcon /></Nav.Link>
      <Nav.Link  href="#features"><FacebookIcon /></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
  </Container>
</Navbar>
    )
    
}
 
export default Boxs;