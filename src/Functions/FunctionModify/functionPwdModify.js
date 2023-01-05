import axios from "axios";
import server_ip from "../../serverIP";

function functionPwdModify(idValue, pwRef, newPwRef, handlePasswordModifyModalClose) {
    if (pwRef.current.value.includes("(") || pwRef.current.value.includes(")") || pwRef.current.value.includes(";")) {
        alert("기존 비밀번호 입력값에 (, ), ; 값 중 하나 이상이 들어가 있습니다.!");
        pwRef.current.focus();
        return false;
    }
    if (newPwRef.current.value.includes("(") || newPwRef.current.value.includes(")") || newPwRef.current.value.includes(";")) {
        alert("새로운 비밀번호 입력값에 (, ), ; 값 중 하나 이상이 들어가 있습니다.");
        newPwRef.current.focus();
        return false;
    }
    
    axios.post("http://" + server_ip + ":8000/back/pass_ch/", {
        id: idValue,
        old_pw: pwRef.current.value,
        new_pw: newPwRef.current.value
    }).then((res) => {
        if(res.data.chk_message === "비밀번호가 틀렸습니다.") {
            alert("기존 비밀번호가 틀렸습니다.");
            pwRef.current.focus();
        }
        else if(res.data.chk_message === "비밀번호가 변경되었습니다.") {
            alert("비밀번호가 변경되었습니다.");
            handlePasswordModifyModalClose();
        }
    }).catch((err) => {
        console.log(err);
    })
}

export default functionPwdModify;