//import css
import "../../css/BoardPageCss/BoardDetail.css";
//import react bootstrap
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
//import react bootstrap icons
import { HandThumbsUpFill } from "react-bootstrap-icons";
//import react hooks
import { useEffect, useState } from "react";
//import functions
import functionBoardDetail from "../../Functions/FunctionBoard/functionBoardDetail";
import { useNavigate } from "react-router-dom";


function BoardDetail() {
    //댓글 div에 id 값으로 댓글의 고유 키값 + 해당 게시글 고유 키값을 동시에 주기 위한 변수
    let commentsID;

    //화면 이동을 위한 useNavigate 변수
    const navigate = useNavigate();

    //게시글 내용을 담을 배열 useState 변수
    const [ boardInfo, setBoardInfo ] = useState([]);
    //댓글 내용을 담을 배열 useState 변수
    const [ commentInfo, setCommentInfo ] = useState([]);
    //로딩 화면을 표시하기 위한 status 변수
    const [ loadingStatus, setLoadingStatus ] = useState(false);

    //게시글 첫 렌더링 시 해당 게시글의 내용을 받아오기 위한 useEffect 함수
    useEffect(() => {
        functionBoardDetail(window.sessionStorage.currentClickBoardID, setBoardInfo, setCommentInfo, setLoadingStatus);
    }, []);

    //게시글 내에서 팀 페이지 바로 가기 버튼 클릭 시 호출되는 이벤트 함수
    const handleTeamButtonClick = () => {
        window.sessionStorage.setItem("currentClickTeam", boardInfo[5]);
        navigate("/teaminfo");
    }

    if(loadingStatus) {
        return (
            <div id='boardDetailAllContainer'>
                <div id="boardDetailContainer">
                    <div id="boardTitleContainer">
                        <h4>{window.sessionStorage.category === "Team" ? "팀 구인 게시판" : (window.sessionStorage.category === "Question" ? "질문 게시판" : "정보 공유 게시판")}</h4>
                        <hr></hr>
                        <p>{boardInfo[0]}</p>
                        <div id="boardAdditionInfoContainer">
                            <span>{boardInfo[1]}</span>
                            <span>{boardInfo[6]}</span>
                            <div>
                                <span>조회 {boardInfo[2]}</span>
                                <span>추천 {boardInfo[3]}</span>
                                <span>댓글 {commentInfo.length}</span>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div id="boardContentsContainer">
                        {boardInfo[5] ? 
                            <button id="boardTeamButton" onClick={handleTeamButtonClick}>
                                {boardInfo[5]} 페이지 바로 가기
                            </button>
                        :   null
                        }
                        <p>{boardInfo[4]}</p>
                    </div>
                    <div id="boardCommentsContainer">
                        <div id="boardCommentsIntroContainer">
                            <div>
                                <HandThumbsUpFill></HandThumbsUpFill>
                                <span>추천</span>
                            </div>
                        </div>
                        <hr></hr>
                        {commentInfo.map((comment) => {
                            commentsID = comment[4] + "+" + comment[0]

                            return(
                                <div key={comment[0]} id={commentsID} className="commentsContainer">
                                    <span>{comment[2]}</span>
                                    <span>{comment[1]}</span>
                                    <span>{comment[3]}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
    else if(!loadingStatus) {
        return (
            <div id='boardDetailAllContainer' style={{textAlign:"center"}}>
                <Spinner animation="border" />
            </div>
        )
    }
}

export default BoardDetail;