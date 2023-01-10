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
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
}

export default functionTeamMake;