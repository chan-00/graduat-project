//import react bootstrap
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Header css
import "../../css/MainPageCss/Header.css"
//import react router
import { useNavigate } from 'react-router-dom';

//페이지 Header 영역을 bootstrap의 Navbar 활용하여 표현
function Header() {
    const navigate = useNavigate();

    //각각 로그인/회원가입 버튼을 눌렀을 때 호출되는 이벤트 함수로, 로그인과 회원가입 창으로 넘어가게끔 한다.
    const handleLoginShow = (e) => {
        e.preventDefault();
        navigate("/signin");
    }
    const handleSignUpShow = (e) => {
        e.preventDefault();
        navigate("/signup");
    }

    return (
        <div>
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
                        <button className='signBtn' onClick={handleLoginShow}>Sign In</button>
                        <button className='signBtn' onClick={handleSignUpShow}>Sign Up</button>
                    </div>}
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;