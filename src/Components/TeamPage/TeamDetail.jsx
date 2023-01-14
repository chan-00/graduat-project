//import css
import "../../css/TeamPageCss/TeamInfo.css";
//import react icons
import { PersonLinesFill, FolderSymlink, Chat, BarChartSteps } from "react-bootstrap-icons";
//import react hooks
import { useEffect, useState } from "react";
//import functions
import functionGetTeamBelong from "../../Functions/FunctionTeam/functionGetTeamBelong";
//import component
import TeamInfoContentsContainer from "./TeamInfoContents/TeamInfoContentsContainer";


function TeamInfo() {
    //현재 팀 상세 페이지에 들어온 계정이 해당 팀에 속해 있는지, 속해 있다면 팀장인지에 대한 여부 값이 담길 useState 변수
    const [ teamBelong, setTeamBelong ] = useState("");
    //현재 사이드바 옆에 어떤 내용을 출력할지에 대한 내용이 담긴 useState 변수
    const [ selectedMenu, setSelectedMenu ] = useState("TeamInfo");

    //팀 상세 페이지가 처음 렌더링 될 때 현재 페이지에 있는 계정의 아이디값과 어떤 팀의 페이지에 있는지에 대한 데이터를,
    //백엔드와 통신하는 함수의 매개변수로 넘겨주고 호출한다.
    useEffect(() => {
        functionGetTeamBelong(window.sessionStorage.id, window.sessionStorage.currentClickTeam);
    }, []);
    
    //팀 상세 페이지의 sidebar 메뉴 클릭 시 호출되는 이벤트 함수이다.
    const handleTeamSideBarMenuClick = (clickID) => {
        setSelectedMenu(clickID);
    }

    return (
        <div id="teamPageAllContainer">
            <div id="teamPageSideBar">
                <div id="TeamInfo" className={selectedMenu === "TeamInfo" ? "selectedTeamSideBarMenu" : ""} onClick={() => handleTeamSideBarMenuClick("TeamInfo")}>
                    <PersonLinesFill></PersonLinesFill>
                    <span>Team Info</span> 
                </div>
                <div id="FileHistory" className={selectedMenu === "FileHistory" ? "selectedTeamSideBarMenu" : ""} onClick={() => handleTeamSideBarMenuClick("FileHistory")}>
                    <FolderSymlink></FolderSymlink>
                    <span>File History</span> 
                </div>
                <div id="ChatLog" className={selectedMenu === "ChatLog" ? "selectedTeamSideBarMenu" : ""} onClick={() => handleTeamSideBarMenuClick("ChatLog")}>
                    <Chat></Chat>
                    <span>Chat Log</span> 
                </div>
                <div id="Management" className={selectedMenu === "Management" ? "selectedTeamSideBarMenu" : ""} onClick={() => handleTeamSideBarMenuClick("Management")}>
                    <BarChartSteps></BarChartSteps>
                    <span>Management</span> 
                </div>
            </div>
            <TeamInfoContentsContainer currentSelectMenu={selectedMenu}></TeamInfoContentsContainer>
        </div>
    )
}

export default TeamInfo;