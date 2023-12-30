import './MyNavbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, NavLink } from 'react-router-dom';
function MyNavbar(){
    const expand = 'lg'
    return(
        <>
        <Navbar key={expand} expand={expand} style={{backgroundColor : 'rgb(27,47,69 )'}} >
          <Container>
            <Navbar.Brand className='text-light fs-3' href="#">Nova</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Nova
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to={'/'}  className='nav-link opacity-75'>Home</NavLink>
                  <NavLink to={'/about'} className='nav-link opacity-75'>About</NavLink>
                  <NavLink to={'/services'} className='nav-link opacity-75'>Servies</NavLink>
                  <NavLink to={'/blog'} className='nav-link opacity-75'>Blog</NavLink>
                  <NavLink to={'/contact'} className='nav-link opacity-75'>Contact</NavLink>
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        
        </>
    )
}
export default MyNavbar