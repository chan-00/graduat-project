//import css
import "../../css/MyPageCss/MyPage.css";
import "../../css/SignPageCss/Sign.css";
//import react bootstrap icons
import { PersonCircle } from "react-bootstrap-icons";
import { Button, Modal } from "react-bootstrap";
//import react hooks
import { useEffect, useState, useRef } from "react";
//import components
import JoinTeam from "./JoinTeam";
import ApplyMessage from "./ApplyMessage";
//import react router
import { useNavigate } from "react-router-dom";
//import functions
import functionPwdModify from "../../Functions/FunctionModify/functionPwdModify";
import functionNicknameModify from "../../Functions/FunctionModify/functionNicknameModify";
//import atom
import { useRecoilState } from "recoil";
import atomNickname from "../../Atoms/atomNickname";


//마이페이지 영역 컴포넌트
function MyPage() {
    const navigate = useNavigate();

    //닉네임 atom 값을 가져와 mypage의 profile 부분에 닉네임을 표시해주기 위한 useRecoilState 값
    const [ nickname, setNickname ] = useRecoilState(atomNickname);

    //메뉴 버튼 클릭(Joined Team, Apply Message)에 따라 해당 버튼의 클래스라던지 밑에 출력되는 컴포넌트를 동적으로 조작하기 위한 Boolean useState 변수값 
    const [ clickTeamBtnState, setClickTeamBtnState ] = useState(true);
    //password edit 버튼 클릭 시 비밀번호 수정을 할 수 있는 Modal 창을 띄우게 하도록 하는 Boolean useState 변수
    const [ passwordModifyModalShow, setPasswordModifyModalShow ] = useState(false);
    //nickname edit 버튼 클릭 시 닉네임 수정을 할 수 있는 Modal 창을 띄우게 하도록 하는 Boolean useState 변수
    const [ nicknameModifyModalShow, setNicknameModifyModalShow ] = useState(false);

    //기존 비밀번호 입력 input에 대한 useRef 변수
    const pwRef = useRef();
    //새로운 비밀번호 입력 input에 대한 useRef 변수
    const newPwRef = useRef();
    //새로운 닉네임 입력 input에 대한 useRef 변수
    const newNicknameRef = useRef();

    //마이페이지 첫 렌더링 시 body 태그의 background color를 변경하기 위한 useEffect 작업
    useEffect(() => {
        /*
        if(window.sessionStorage.id) {
            document.body.style.backgroundColor = "#f8f8fa";
        }
        else {
            alert("로그인 되어 있지 않습니다!");
            navigate("/signin");
        }
        */
        document.body.style.backgroundColor = "#f8f8fa";
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

    //비밀번호 수정 Modal창에서 수정 버튼 클릭 시 호출되는 이벤트 함수이다.
    const handlePasswordModify = (e) => {
        e.preventDefault();
        functionPwdModify(window.sessionStorage.id, pwRef, newPwRef, handlePasswordModifyModalClose);
    }
    //닉네임 수정 Modal창에서 수정 버튼 클릭 시 호출되는 이벤트 함수이다.
    const handleNicknameModify = (e) => {
        e.preventDefault();
        functionNicknameModify(window.sessionStorage.id, newNicknameRef, handleNicknameModifyModalClose, setNickname);
    }

    return (
        <div className="mypageAllContainer">
            <div className="mypageContentsAllContainer">
                <div className="mypageProfileAllContainer mypageContentsContainer">
                    <div className="mypageProfileContainer">
                        <PersonCircle></PersonCircle>
                        <span>{nickname}</span>
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
            <Modal 
                show={passwordModifyModalShow} 
                onHide={handlePasswordModifyModalClose}
                >
                <Modal.Header closeButton>
                    <h4>Password Change</h4>
                </Modal.Header>
                <Modal.Body>
                    <form className="signContainer" onSubmit={handlePasswordModify}>
                        <div>
                            <input
                                type="password"
                                placeholder="기존 비밀번호 입력"
                                ref={pwRef}
                                autoFocus
                                required
                                className="formElements inputElements"
                                style={{marginBottom:"10px", borderRadius:"5px"}}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="새로운 비밀번호 입력"
                                ref={newPwRef}
                                required
                                className="formElements inputElements"
                                style={{borderRadius:"5px"}}
                            />
                        </div>
                        <div className="signButtonContainer" style={{marginTop:"20px"}}>
                            <Button type="submit" variant="outline-primary" className="modifyButtons" style={{fontSize:"13px"}}>비밀번호 수정</Button>
                            <Button variant="outline-danger" className="modifyButtons" style={{marginLeft:"10px", fontSize:"13px"}} onClick={handlePasswordModifyModalClose}>취소</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
            <Modal show={nicknameModifyModalShow} onHide={handleNicknameModifyModalClose}>
                <Modal.Header closeButton>
                    <h4>Nickname Change</h4>
                </Modal.Header>
                <Modal.Body>
                    <form className="signContainer" onSubmit={handleNicknameModify}>
                        <div>
                            <input
                                type="text"
                                placeholder="새로운 닉네임 입력"
                                ref={newNicknameRef}
                                defaultValue={nickname}
                                autoFocus
                                required
                                className="formElements inputElements"
                                style={{marginBottom:"10px", borderRadius:"5px"}}
                            />
                        </div>
                        <div className="signButtonContainer" style={{marginTop:"20px"}}>
                            <Button type="submit" variant="outline-primary" className="modifyButtons" style={{fontSize:"13px"}}>닉네임 수정</Button>
                            <Button variant="outline-danger" className="modifyButtons" style={{marginLeft:"10px", fontSize:"13px"}} onClick={handleNicknameModifyModalClose}>취소</Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default MyPage;