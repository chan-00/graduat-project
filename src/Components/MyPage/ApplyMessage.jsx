//import css
import "../../css/MyPageCss/ApplyMessage.css";
//import react bootstrap icons
import { PersonCircle, X, EmojiFrown } from "react-bootstrap-icons";
//import react bootstrap
import { Button } from "react-bootstrap"

function ApplyMessage() {
    return (
        <div id="applyMessageAllContainer">
            <h3>Apply History</h3>
            <h3>Applied History</h3>
            <div id="applyMessageContainer">
                <div className="applyContents">
                    JavaScript 스터디 신청
                </div>
                <div className="applyContents">
                    Unity 스터디 신청
                </div>
                <div className="applyContents">
                    Photon 스터디 신청
                </div>
                <div className="applyContents">
                    Django 스터디 신청
                </div>
                <div className="applyContents">
                    Photon 스터디 신청
                </div>
                <div className="applyContents">
                    Django 스터디 신청
                </div>
                <div className="applyContents">
                    Photon 스터디 신청
                </div>
                <div className="applyContents">
                    Django 스터디 신청
                </div>
            </div>
            <div id="appliedMessageContainer">
                <div className="appliedContents">
                    <PersonCircle></PersonCircle>
                    <div className="bubble">
                        ChanYoung<span>(JavaScript 스터디)</span>
                        <Button variant="outline-danger" className="appliedBtn">거절</Button>
                        <Button variant="outline-primary" className="appliedBtn">수락</Button>
                    </div>
                </div>
                <div className="appliedContents">
                    <PersonCircle></PersonCircle>
                    <div className="bubble">
                        ParkJun<span>(Photon 스터디)</span>
                        <Button variant="outline-danger" className="appliedBtn">거절</Button>
                        <Button variant="outline-primary" className="appliedBtn">수락</Button>
                    </div>
                </div>
                <div className="appliedContents">
                    <PersonCircle></PersonCircle>
                    <div className="bubble">
                        Agujun<span>(Unity 스터디)</span>
                        <Button variant="outline-danger" className="appliedBtn">거절</Button>
                        <Button variant="outline-primary" className="appliedBtn">수락</Button>
                    </div>
                </div>
                <div className="appliedContents">
                    <PersonCircle></PersonCircle>
                    <div className="bubble">
                        Maple<span>(Django 스터디)</span>
                        <Button variant="outline-danger" className="appliedBtn">거절</Button>
                        <Button variant="outline-primary" className="appliedBtn">수락</Button>
                    </div>
                </div>
                {/*
                <div className="noneAppliedIcon">
                    <p>None history....</p>
                </div>
                */}
            </div>
        </div>
    )
}

export default ApplyMessage;