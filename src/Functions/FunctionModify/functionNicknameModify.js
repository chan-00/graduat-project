import axios from "axios";
import server_ip from "../../serverIP";

function functionNicknameModify(idValue, newNicknameRef, handleNicknameModifyModalClose) {
    if (newNicknameRef.current.value.includes("(") || newNicknameRef.current.value.includes(")") || newNicknameRef.current.value.includes(";")) {
        alert("새로운 닉네임 입력값에 (, ), ; 값 중 하나 이상이 들어가 있습니다.!");
        newNicknameRef.current.focus();
        return false;
    }
    
    axios.post("http://" + server_ip + ":8000/back/name_ch/", {
        id: idValue,
        nickname: newNicknameRef.current.value,
    }).then((res) => {
        if(res.data.chk_message === "닉네임 중복입니다.") {
            alert("이미 존재하는 닉네임입니다.");
            newNicknameRef.current.focus();
        }
        else if(res.data.chk_message === "닉네임이 변경되었습니다.") {
            alert("닉네임이 성공적으로 바뀌었습니다!");
            window.sessionStorage.setItem("nickname", newNicknameRef.current.value);
            handleNicknameModifyModalClose();
        }
    }).catch((err) => {
        console.log(err);
    })
}

export default functionNicknameModify;