import axios from "axios";
import server_ip from "../../serverIP.js";

//아이디값을 백엔드로 보내고, 중복 여부를 확인하여 화면에 띄울 메시지값(setIdCheckMessage)과 버튼의 활성화 여부값(setSignBtnActivation)을 변경한다.
function functionIdCheck(idRef, setIdCheckMessage, setSignBtnActivation) {
    //데이터베이스로 sql 쿼리 문으로 데이터를 넘길 때 밑의 3개 값이 포함되면 에러가 발생할 수 있기에 사전 차단하기 위한 조건문을 쓴다.
    if(idRef.current.value.includes("(") || idRef.current.value.includes(")") || idRef.current.value.includes(";")) {
        alert("id에 (, ), ; 값 중 하나 이상이 들어가 있습니다.");
        idRef.current.value = "";
        return false;
    }

    //백엔드에 현재 사용자가 입력한 id 값을 전송한다.
    axios.post("http://" + server_ip + ":8000/back/regist/", {
        id: idRef.current.value
    }).then((res) => {
        //백에서 성공적으로 처리되었을 때 then 함수 안으로 들어오게 된다.
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}

export default functionIdCheck;