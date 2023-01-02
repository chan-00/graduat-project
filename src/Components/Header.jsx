//import react bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
//import Header css
import "../css/Header.css"

function Header() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark" id="navContainer">
            <Navbar.Brand href="/" id="navTitle">Graduat Project</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="mr-auto">
                <Nav.Link href="#home">팀 페이지</Nav.Link>
                <NavDropdown title="게시판" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">팀 구인 게시판</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">질문 게시판</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">정보공유 게시판</NavDropdown.Item>
                </NavDropdown>
            </Nav>
            <Nav id="userContainer">
                {window.sessionStorage.id
                ? <NavDropdown title={window.sessionStorage.id} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">My Page</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Logout</NavDropdown.Item>
                </NavDropdown>
                : <div>
                    <button className='signBtn'>Sign In</button>
                    <button className='signBtn'>Sign Up</button>
                </div>}
            </Nav>
        </Navbar>
    )
}

export default Header;