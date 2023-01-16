//import css
import "../../css/BoardPageCss/OfferBoard.css";
//import react bootstrap
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
//import react hooks
import { useEffect, useState } from "react";
//import functions
import functionBoardList from "../../Functions/FunctionBoard/functionBoardList";
//import component
import BoardListShow from "./BoardListShow";


function OfferBoard() {
    //pagination number array를 반복문으로 돌릴 때 사용할 index 변수
    let number;

    //로딩 화면을 표시하기 위한 status 변수
    const [ loadingStatus, setLoadingStatus ] = useState(false);
    //백엔드로부터 게시글 리스트를 받아오는 useState 변수
    const [ teamBoardList, setTeamBoardList ] = useState([]);
    //현재 클릭되어 있는 pagination 번호 값을 담을 useState 변수
    const [ currentPageNum, setCurrentPageNum ] = useState(1);
    //pagination 버튼을 표시해주기 위한 배열 useState 변수
    const [ paginationNumArray, setPaginationNumArray ] = useState([]);

    //페이지 첫 렌더링 시 게시판 카테고리에 맞게 작성된 게시글 리스트들을 백엔드로부터 받아오는 함수 호출
    useEffect(() => {
        functionBoardList(window.sessionStorage.category, setLoadingStatus, setTeamBoardList);
    }, []);
    //백엔드로부터 게시글 리스트를 받아왔을 때 pagination 번호를 매기기 위한 코드
    useEffect(() => {
        const items = [];
        for (number = 1; number <= Math.ceil(teamBoardList.length / 20); number++) {
            items.push(
                <Pagination.Item key={number} id={number} onClick={handlePaginationBtnOnClick}>
                    {number}
                </Pagination.Item>,
            );
        }
        setPaginationNumArray(items);
    }, [teamBoardList]);

    //pagination에서 마우스로 클릭 시 해당 버튼에 active 효과 부여하기 위한 onclick 함수
    const handlePaginationBtnOnClick = (e) => {
        setCurrentPageNum(e.target.id);
    }

    //pagination에 따라 현재 화면에 팀 리스트를 다르게 보여주게 하기 위한 코드
    const indexOfLast = currentPageNum * 20;
    const indexOfFirst = indexOfLast - 20;
    const currentPosts = (posts) => {
        let currentPosts = 0;
        currentPosts = posts.slice(indexOfFirst, indexOfLast);
        return currentPosts;
    };

    if(loadingStatus) {
        return (
            <div id="offerBoardAllContainer">
                <Table className='boardMainContentsContainer'>
                    <thead>
                        <tr>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>댓글</th>
                            <th>조회</th>
                            <th>추천</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <BoardListShow posts={currentPosts(teamBoardList)}></BoardListShow>
                </Table>
                <div id="teamMainPaginationContainer">
                    <Pagination id='paginationContainer'>{paginationNumArray}</Pagination>
                </div>
            </div>
        )
    }
    else if(!loadingStatus) {
        return (
            <div id="teamMainAllContainer" style={{textAlign:"center"}}>
                <Spinner animation="border" />
            </div>
        )
    }
    
}

export default OfferBoard;