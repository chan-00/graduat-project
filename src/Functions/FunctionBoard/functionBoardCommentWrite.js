import axios from "axios";
import server_ip from "../../serverIP.js";

function functionBoardCommentWrite(userID, boardID, commentRef, setCommentInfo) {
    //데이터베이스로 sql 쿼리 문으로 데이터를 넘길 때 밑의 3개 값이 포함되면 에러가 발생할 수 있기에 사전 차단하기 위한 조건문을 쓴다.
    if(commentRef.current.value.includes("(") || commentRef.current.value.includes(")") || commentRef.current.value.includes(";")) {
        alert("댓글 내용에 (, ), ; 값 중 하나 이상이 들어가 있습니다.");
        commentRef.current.focus();
        return false;
    }

    //댓글 작성 시 작성된 값을 백엔드로 전송하기 위한 코드이다.
    axios.post("http://" + server_ip + ":8000/back/write_comment/", {
        id: userID,
        boardID: boardID,
        comment: commentRef.current.value,
    }).then((res) => {
        //백에서 성공적으로 처리되었을 때 then 함수 안으로 들어오게 된다.
        alert("댓글이 작성되었습니다.");
        setCommentInfo(res.data.comment_data);
        commentRef.current.value = "";
    }).catch((err) => {
        console.log(err);
    })
}

export default functionBoardCommentWrite;