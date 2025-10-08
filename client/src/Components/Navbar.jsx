
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

function Navs() {
  return (
    <Navbar expand="lg" className=" bg-yellow-200 px-4 text-green   ">
      <Container>
     
        <Navbar.Brand href="#home" className="fw-bold text-primary">
          Test
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className="fw-semibold">Home</Nav.Link>
            <Nav.Link href="/login" className="fw-semibold">Login</Nav.Link>
            <Nav.Link href="/signup" className="fw-semibold">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navs
