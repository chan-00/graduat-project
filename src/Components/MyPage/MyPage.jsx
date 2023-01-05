//import css
import "../../css/MyPageCss/MyPage.css";
//import react bootstrap icons
import { PersonCircle } from "react-bootstrap-icons";
import { Button, Modal } from "react-bootstrap";
//import react hooks
import { useEffect, useState } from "react";
//import components
import JoinTeam from "./JoinTeam";
import ApplyMessage from "./ApplyMessage";
//import react router
import { useNavigate } from "react-router-dom";


//마이페이지 영역 컴포넌트
function MyPage() {
    const navigate = useNavigate();

    //메뉴 버튼 클릭(Joined Team, Apply Message)에 따라 해당 버튼의 클래스라던지 밑에 출력되는 컴포넌트를 동적으로 조작하기 위한 Boolean useState 변수값 
    const [ clickTeamBtnState, setClickTeamBtnState ] = useState(true);
    //password edit 버튼 클릭 시 비밀번호 수정을 할 수 있는 Modal 창을 띄우게 하도록 하는 Boolean useState 변수
    const [ passwordModifyModalShow, setPasswordModifyModalShow ] = useState(false);
    //nickname edit 버튼 클릭 시 닉네임 수정을 할 수 있는 Modal 창을 띄우게 하도록 하는 Boolean useState 변수
    const [ nicknameModifyModalShow, setNicknameModifyModalShow ] = useState(false);

    //마이페이지 첫 렌더링 시 body 태그의 background color를 변경하기 위한 useEffect 작업
    useEffect(() => {
        if(window.sessionStorage.id) {
            document.body.style.backgroundColor = "#f8f8fa";
        }
        else {
            alert("로그인 되어 있지 않습니다!");
            navigate("/signin");
        }
    }, []);

    //password edit Modal 창을 켜고 끄는 함수이다.
    const handlePasswordModifyModalShow = () => setPasswordModifyModalShow(true);
    const handlePasswordModifyModalClose = () => setPasswordModifyModalShow(false);
    //nickname edit Modal 창을 켜고 끄는 함수이다.
    const handleNicknameModifyModalShow = () => setNicknameModifyModalShow(true);
    const handleNicknameModifyModalClose = () => setNicknameModifyModalShow(false);

    //Nav에서 Joined Team 버튼 클릭 시 호출되는 이벤트 함수이다.
    const handleJoinTeamClick = () => {
        setClickTeamBtnState(true);
    }
    //Nav에서 Apply Message 버튼 클릭 시 호출되는 이벤트 함수이다.
    const handleApplyMessageClick = () => {
        setClickTeamBtnState(false);
    }

    return (
        <div className="mypageAllContainer">
            <div className="mypageContentsAllContainer">
                <div className="mypageProfileAllContainer mypageContentsContainer">
                    <div className="mypageProfileContainer">
                        <PersonCircle></PersonCircle>
                        <span>{window.sessionStorage.nickname}</span>
                        <button onClick={handleNicknameModifyModalShow}>Nickname Edit</button>
                        <button onClick={handlePasswordModifyModalShow}>Password Edit</button>
                    </div>
                    <hr></hr>
                    <div className="mypageUserContentsListContainer">
                        <div><p>3</p><span>Join Team</span></div>
                        <div><p>810</p><span>Write Post</span></div>
                        <div><p>270</p><span>Write Comments</span></div>
                    </div>
                </div>
                <div className="mypageTeamAllContainer mypageContentsContainer">
                    <div className="mypageNavContainer">
                        <button className={clickTeamBtnState ? 'mypageNavBtnActive' : null} onClick={handleJoinTeamClick}>Joined Team</button>
                        <button className={clickTeamBtnState ? null : 'mypageNavBtnActive'} onClick={handleApplyMessageClick}>Apply Message</button>
                    </div>
                    <hr></hr>
                    <div className="mypageTeamContentsContainer">
                        {clickTeamBtnState ? <JoinTeam></JoinTeam> : <ApplyMessage></ApplyMessage>}
                    </div>
                </div>
            </div>
            <Modal show={passwordModifyModalShow} onHide={handlePasswordModifyModalClose}>
                <Modal.Header closeButton>
                    Password Change
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handlePasswordModifyModalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handlePasswordModifyModalClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={nicknameModifyModalShow} onHide={handleNicknameModifyModalClose}>
                <Modal.Header closeButton>
                    Nickname Change
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleNicknameModifyModalClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleNicknameModifyModalClose}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default MyPage;