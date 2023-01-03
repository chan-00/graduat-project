//import sign css
import "../../css/SignPageCss/Sign.css";
//import react bootstrap
import { Button } from "react-bootstrap";
//import react hooks
import { useRef } from "react";
//import react router
import { useNavigate } from "react-router-dom"
//import functions
import functionSignUp from "../../Functions/FunctionSign/functionSignUp";

function SignUp() {
    //회원가입 시 입력되는 데이터의 ref 변수들 선언
    const idRef = useRef();
    const pwRef = useRef();
    const pwCheckRef = useRef();
    const nicknameRef = useRef();

    //회원가입 성공 시 메인 페이지로 가게 하기 위한 useNavigate 변수 선언
    const navigate = useNavigate();

    //회원가입 버튼 클릭 시 백엔드와 통신하는 함수 호출
    const handleSignUp = (e) => {
        e.preventDefault();
        functionSignUp(idRef, pwRef, pwCheckRef, nicknameRef, navigate);
    }

    return (
        <div className="signAllContainer">
            <div className="signContainer">
                <h2>서일대 계정을 생성하세요</h2>
                <hr></hr>
                <div>
                    <input
                        type="text"
                        placeholder="아이디 입력"
                        ref={idRef}
                        autoFocus
                        required
                        className="formElements inputElements"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="비밀번호 입력"
                        ref={pwRef}
                        required
                        className="formElements inputElements"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="비밀번호 확인"
                        ref={pwCheckRef}
                        required
                        className="formElements inputElements"
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="닉네임 입력"
                        ref={nicknameRef}
                        required
                        className="formElements inputElements"
                    />
                </div>
                <div className="signButtonContainer">
                    <Button variant="primary" className="formElements" onClick={handleSignUp}>회원가입</Button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;