//import css
import "../../css/MyPageCss/ApplyMessage.css";
//import react bootstrap icons
import { PersonCircle } from "react-bootstrap-icons";
//import react bootstrap
import { Button, Card } from "react-bootstrap"

function ApplyMessage() {
    return (
        <>
            <h3>Applied History</h3>
            <div id="appliedMessageContainer">
                <div className="cardContainer">
                    <Card>
                    <Card.Img variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E" />
                        <Card.Body>
                            <Card.Title>ChanYoung</Card.Title>
                            <Card.Text>
                                <p>안녕하세요, 저는 JavaScript 개발자입니다.</p>
                                <span className="userEmail">a37975387@gmail.com</span>
                                <span className="userAppliedStudy">JavaScript 스터디 신청</span>
                            </Card.Text>
                            <button className="outlintPrimary">승인</button>
                            <button className="outlintDanger">거절</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardContainer">
                    <Card>
                    <Card.Img variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E" />
                        <Card.Body>
                            <Card.Title>ChanYoung</Card.Title>
                            <Card.Text>
                                <p>안녕하세요, 저는 JavaScript 개발자입니다.</p>
                                <span className="userEmail">a37975387@gmail.com</span>
                                <span className="userAppliedStudy">JavaScript 스터디 신청</span>
                            </Card.Text>
                            <button className="outlintPrimary">승인</button>
                            <button className="outlintDanger">거절</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardContainer">
                    <Card>
                    <Card.Img variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E" />
                        <Card.Body>
                            <Card.Title>ChanYoung</Card.Title>
                            <Card.Text>
                                <p>안녕하세요, 저는 JavaScript 개발자입니다.</p>
                                <span className="userEmail">a37975387@gmail.com</span>
                                <span className="userAppliedStudy">JavaScript 스터디 신청</span>
                            </Card.Text>
                            <button className="outlintPrimary">승인</button>
                            <button className="outlintDanger">거절</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardContainer">
                    <Card>
                    <Card.Img variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E" />
                        <Card.Body>
                            <Card.Title>ChanYoung</Card.Title>
                            <Card.Text>
                                <p>안녕하세요, 저는 JavaScript 개발자입니다.</p>
                                <span className="userEmail">a37975387@gmail.com</span>
                                <span className="userAppliedStudy">JavaScript 스터디 신청</span>
                            </Card.Text>
                            <button className="outlintPrimary">승인</button>
                            <button className="outlintDanger">거절</button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="cardContainer">
                    <Card>
                    <Card.Img variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E" />
                        <Card.Body>
                            <Card.Title>ChanYoung</Card.Title>
                            <Card.Text>
                                <p>안녕하세요, 저는 JavaScript 개발자입니다.</p>
                                <span className="userEmail">a37975387@gmail.com</span>
                                <span className="userAppliedStudy">JavaScript 스터디 신청</span>
                            </Card.Text>
                            <button className="outlintPrimary">승인</button>
                            <button className="outlintDanger">거절</button>
                        </Card.Body>
                    </Card>
                </div>
                {/*
                <div className="noneAppliedIcon">
                    <p>None history....</p>
                </div>
                */}
            </div>
        </>
    )
}

export default ApplyMessage;