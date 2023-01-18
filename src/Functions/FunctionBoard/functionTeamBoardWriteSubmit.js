import axios from "axios";
import server_ip from "../../serverIP.js";

function functionTeamBoardWriteSubmit(category, teamname, userID, contentsRef, titleRef, navigate) {
    //데이터베이스로 sql 쿼리 문으로 데이터를 넘길 때 밑의 3개 값이 포함되면 에러가 발생할 수 있기에 사전 차단하기 위한 조건문을 쓴다.
    if(contentsRef.current.value.includes("(") || contentsRef.current.value.includes(")") || contentsRef.current.value.includes(";")) {
        alert("게시글 내용에 (, ), ; 값 중 하나 이상이 들어가 있습니다.");
        contentsRef.current.focus();
        return false;
    }
    if(titleRef.current.value.includes("(") || titleRef.current.value.includes(")") || titleRef.current.value.includes(";")) {
        alert("게시글 제목에 (, ), ; 값 중 하나 이상이 들어가 있습니다.");
        titleRef.current.focus();
        return false;
    }

    //팀 구인 게시판 글 작성 시 백엔드에게 작성한 글 내용을 전송하는 코드이다.
    axios.post("http://" + server_ip + ":8000/back/write_post/", {
        id: userID,
        category: category,
        teamname: teamname,
        contents: contentsRef.current.value,
        title: titleRef.current.value,
    }).then((res) => {
        //백에서 성공적으로 처리되었을 때 then 함수 안으로 들어오게 된다.
        console.log(res);
        if(res.data.post_data === "작성이 완료되었습니다!") {
            alert("게시글 작성이 완료되었습니다!");
            if(category === "Team") {
                navigate("/offerboard");
            }
            else if(category === "Question") {
                navigate("/questionboard");
            }
            else if(category === "Share") {
                navigate("/shareboard");
            }
        }
    }).catch((err) => {
        console.log(err);
    })
}

export default functionTeamBoardWriteSubmit;