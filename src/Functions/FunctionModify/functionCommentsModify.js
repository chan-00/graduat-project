import axios from "axios";
import server_ip from "../../serverIP";

function functionCommentsModify(idValue, newCommentsRef, handleCommentsModifyModalClose, setUserComments) {
    if (newCommentsRef.current.value.includes("(") || newCommentsRef.current.value.includes(")") || newCommentsRef.current.value.includes(";")) {
        alert("새로운 코멘트 입력값에 (, ), ; 값 중 하나 이상이 들어가 있습니다.!");
        newCommentsRef.current.focus();
        return false;
    }
    
    axios.post("http://" + server_ip + ":8000/back/comment_ch/", {
        id: idValue,
        comment: newCommentsRef.current.value,
    }).then((res) => {
        alert("코멘트가 성공적으로 수정되었습니다!");
        setUserComments(newCommentsRef.current.value);
        handleCommentsModifyModalClose();
    }).catch((err) => {
        console.log(err);
    })
}

export default functionCommentsModify;