//import react bootstrap icons
import { PersonCircle, EmojiFrown } from "react-bootstrap-icons";
//import react bootstrap
import { Button } from "react-bootstrap";
//import css
import "../../css/MyPageCss/JoinTeam.css";
import { useEffect } from "react";

function JoinTeam({teamArray}) {
    return (
        <div className="mypageTeamContainer"> 
            {/*   가입된 팀이 있을 때의 디자인  */}
            <ul className="mypageTeamList">
                {teamArray.map((team) => {
                    return (
                        <li key={team[0]} id={team[0]}>{team[0]}<span key={team[0]}>{team[1]}/8</span></li>
                    )
                })}
            </ul>
            <div className="mypageTeamMemberContainer">
                <h2>Team member</h2>
                <div className="mypageTeamMemberInfo">
                    <div>
                        <PersonCircle></PersonCircle>
                        <span style={{color:"royalblue"}}>ChanYoung</span>
                    </div>
                    <div>
                        <PersonCircle></PersonCircle>
                        <span>Park Jun</span>
                    </div>
                    <div>
                        <PersonCircle></PersonCircle>
                        <span>Hyeon Jun</span>
                    </div>
                    <div>
                        <PersonCircle></PersonCircle>
                        <span>duckyoon</span>
                    </div>
                    <div>
                        <PersonCircle></PersonCircle>
                        <span>jaedragon</span>
                    </div>
                    <div>
                        <PersonCircle></PersonCircle>
                        <span>abcdafdac</span>
                    </div>
                    <div>
                        <PersonCircle></PersonCircle>
                        <span>fshggdshsd</span>
                    </div>
                    <div>
                        <PersonCircle></PersonCircle>
                        <span>adsfeqwtbs</span>
                    </div>
                </div>
                <Button variant="outline-secondary" className="mypageTeamMemberFooter">JavaScript 스터디 페이지로 이동</Button>
            </div>
            
            {/*   가입된 팀이 없을 때의 디자인  */}
            {/*
            <div id="mypageNoneTeamMessageContainer">
                <EmojiFrown></EmojiFrown>
                <p>가입되어 있는 팀이 없습니다......</p>
            </div>
            */}
        </div>
    )
}

export default JoinTeam;