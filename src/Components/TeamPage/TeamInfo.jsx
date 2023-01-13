//import css
import "../../css/TeamPageCss/TeamInfo.css";
//import react icons
import { PersonLinesFill, FolderSymlink } from "react-bootstrap-icons";
//import react hooks
import { useEffect, useState } from "react";
//import functions
import functionGetTeamInfo from "../../Functions/FunctionTeam/functionGetTeamInfo";


function TeamInfo() {
    //현재 팀 상세 페이지에 들어온 계정이 해당 팀에 속해 있는지, 속해 있다면 팀장인지에 대한 여부 값이 담길 useState 변수
    const [ teamBelong, setTeamBelong ] = useState("");
    //현재 사이드바 옆에 어떤 내용을 출력할지에 대한 내용이 담긴 useState 변수
    const [ selectedMenu, setSelectedMenu ] = useState("Main");

    useEffect(() => {

        functionGetTeamInfo(window.sessionStorage.id, window.sessionStorage.currentClickTeam);
    }, []);
    
    return (
        <div id="teamPageAllContainer">
            <div id="teamPageSideBar">
                <div>
                    <PersonLinesFill></PersonLinesFill>
                    <span>Team Info</span> 
                </div>
                <div>
                    <FolderSymlink></FolderSymlink>
                    <span>File History</span> 
                </div>
            </div>
        </div>
    )
}

export default TeamInfo;