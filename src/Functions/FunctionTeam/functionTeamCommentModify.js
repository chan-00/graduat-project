import axios from "axios";
import server_ip from "../../serverIP";

function functionTeamCommentModify(newCommentRef, currentClickTeam, setTeamComment, handleTeamCommentModifyModalClose) {
    if (newCommentRef.current.value.includes("(") || newCommentRef.current.value.includes(")") || newCommentRef.current.value.includes(";")) {
        alert("새로운 코멘트 입력값에 (, ), ; 값 중 하나 이상이 들어가 있습니다.!");
        newCommentRef.current.focus();
        return false;
    }
    
    axios.post("http://" + server_ip + ":8000/back/ch_comment/", {
        teamname: currentClickTeam,
        teamcomment: newCommentRef.current.value,
    }).then((res) => {
        alert("코멘트가 성공적으로 수정되었습니다!");
        setTeamComment(newCommentRef.current.value);
        handleTeamCommentModifyModalClose();
    }).catch((err) => {
        console.log(err);
    })
}

export default functionTeamCommentModify;