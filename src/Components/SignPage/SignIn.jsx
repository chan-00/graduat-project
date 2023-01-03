//import sign css
import "../../css/SignPageCss/Sign.css";
//import react bootstrap
import { Button } from "react-bootstrap";
//import react hooks
import { useRef } from "react";
//import react router
import { Link } from "react-router-dom"

function SignIn() {
    //로그인 시 입력되는 아이디/비밀번호의 ref 변수들 선언
    const idRef = useRef();
    const pwRef = useRef();

    return (
        <div className="signAllContainer">
            <div className="signContainer">
                <h2>서일대 계정을 입력하세요</h2>
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
                <div className="signButtonContainer">
                    <Button variant="primary" className="formElements">로그인</Button>
                </div>
                <div>
                    <span>서일대가 처음이신가요? <Link to="/signup">회원가입</Link></span>
                </div>
            </div>
        </div>
    )
}

export default SignIn;