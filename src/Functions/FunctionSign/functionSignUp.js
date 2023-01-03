import axios from "axios";
import server_ip from "../../serverIP.js";

function functionSignUp(idRef, pwRef, pwCheckRef, nicknameRef, navigate) {
    //데이터베이스로 sql 쿼리 문으로 데이터를 넘길 때 밑의 3개 값이 포함되면 에러가 발생할 수 있기에 사전 차단하기 위한 조건문을 쓴다.
    if(idRef.current.value.includes("(") || idRef.current.value.includes(")") || idRef.current.value.includes(";")) {
        alert("id에 (, ), ; 값 중 하나 이상이 들어가 있습니다.");
        idRef.current.value = "";
        return false;
    }
    if(pwRef.current.value.includes("(") || pwRef.current.value.includes(")") || pwRef.current.value.includes(";")) {
        alert("비밀번호에 (, ), ; 값 중 하나 이상이 들어가 있습니다.");
        pwRef.current.value = "";
        return false;
    }
    if(nicknameRef.current.value.includes("(") || nicknameRef.current.value.includes(")") || nicknameRef.current.value.includes(";")) {
        alert("이름에 (, ), ; 값 중 하나 이상이 들어가 있습니다.");
        nicknameRef.current.value = "";
        return false;
    }

    //비밀번호와 비밀번호 체크 값이 같은지 확인하여 같으면 axios로 서버에 값을 보낸다.
    if(pwRef.current.value === pwCheckRef.current.value) {
        //axios post 방식으로 서버 url에 signup 요청을 보낸다.(입력한 값도 같이 보냄)
        axios.post("http://" + server_ip + ":8000/back/reeegist/", {
            id: idRef.current.value,
            pw: pwRef.current.value,
            nickname: nicknameRef.current.value
        }).then((res) => {
            //백에서 성공적으로 처리되었을 때 then 함수 안으로 들어오게 된다.
            alert("회원가입 성공!");
            //window.sessionStorage.setItem("id", idRef.current.value);
            //navigate("/");
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    } else {
        //else 문으로 들어왔다는 것은 비밀번호와 재확인 값이 같지 않은 경우므로 에러 메시지를 띄운다.
        alert("비밀번호와 비밀번호 재확인 값이 같지 않습니다.");
        pwCheckRef.current.focus();
    }
}

export default functionSignUp;