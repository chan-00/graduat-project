import axios from "axios";
import server_ip from "../../serverIP";

function functionTeamMake(idValue, teamnameRef, teamDescRef, teamCategory, navigate) {
    if (teamnameRef.current.value.includes("(") || teamnameRef.current.value.includes(")") || teamnameRef.current.value.includes(";")) {
        alert("팀 이름에 (, ), ; 값 중 하나 이상이 들어가 있습니다.!");
        teamnameRef.current.focus();
        return false;
    }
    if (teamDescRef.current.value.includes("(") || teamDescRef.current.value.includes(")") || teamDescRef.current.value.includes(";")) {
        alert("팀 설명에 (, ), ; 값 중 하나 이상이 들어가 있습니다.");
        teamDescRef.current.focus();
        return false;
    }
    
    axios.post("http://" + server_ip + ":8000/back/make_team/", {
        id: idValue,
        teamname: teamnameRef.current.value,
        teamdesc: teamDescRef.current.value,
        teamcategory: teamCategory
    }).then((res) => {
        if(res.data.chk_message === "팀 생성이 완료되었습니다.") {
            alert(res.data.chk_message);
            navigate("/team");
        }
        else if(res.data.chk_message === "팀 이름이 중복입니다.") {
            alert("이미 해당 팀명으로 팀이 만들어져 있습니다.");
            teamnameRef.current.focus();
        }
    }).catch((err) => {
        console.log(err);
    })
}

export default functionTeamMake;