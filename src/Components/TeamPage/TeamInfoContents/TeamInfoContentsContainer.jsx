//import components
import TeamInfo from "./TeamInfo"
import FileHistory from "./FileHistory"
import ChatLog from "./ChatLog"
import Management from "./Management"


function TeamInfoContentsContainer({ currentSelectMenu }) {
    if(currentSelectMenu === "TeamInfo") {
        return (
            <TeamInfo></TeamInfo>
        )
    }
    else if(currentSelectMenu === "FileHistory") {
        return (
            <FileHistory></FileHistory>
        )
    }
    else if(currentSelectMenu === "ChatLog") {
        return (
            <ChatLog></ChatLog>
        )
    }
    else if(currentSelectMenu === "Management") {
        return (
            <Management></Management>
        )
    }
    
}

export default TeamInfoContentsContainer;