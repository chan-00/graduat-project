//import css
import "../../css/TeamPageCss/TeamInfo.css";
//import react hooks
import { useState } from "react";
//import react sidebar
import SidebarMenu from "react-bootstrap-sidebar-menu";

function TeamInfo() {
    //현재 팀 상세 페이지에 들어온 계정이 해당 팀에 속해 있는지, 속해 있다면 팀장인지에 대한 여부 값이 담길 useState 변수
    const [ teamBelong, setTeamBelong ] = useState("");
    //현재 사이드바 옆에 어떤 내용을 출력할지에 대한 내용이 담긴 useState 변수
    const [ selectedMenu, setSelectedMenu ] = useState("Main");

    return (
        <div>
            
        </div>
    )
}

export default TeamInfo;