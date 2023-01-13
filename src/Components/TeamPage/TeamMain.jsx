//import react bootstrap
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Spinner from 'react-bootstrap/Spinner';
//import css
import "../../css/TeamPageCss/TeamMain.css";
//import react bootstrap icons
import { PersonCircle } from "react-bootstrap-icons"
//import react hooks
import { useState, useEffect } from 'react';
//import functions
import functionGetTeamInfoList from '../../Functions/FunctionTeam/functionGetTeamInfoList';
//import react router
import { Link } from 'react-router-dom';


//자신이 갖고 있는 팀의 리스트를 볼 수 있는 팀 메인 페이지 component
function TeamMain() {

    //전체 팀 리스트 배열 값을 담을 useState 변수
    const [ userTeamInfoList, setUserTeamInfoList ] = useState([]);
    //현재 페이지에 보여질 팀 리스트를 담을 배열 useState 변수(pagination 관련)
    const [ currentTeamInfo, setCurrentTeamInfo ] = useState([]);
    //현재 클릭되어 있는 pagination 번호 값을 담을 useState 변수
    const [ currentPageNum, setCurrentPageNum ] = useState(1);
    //로딩 화면을 표시하기 위한 status 변수
    const [ loadingStatus, setLoadingStatus ] = useState(false);

    //처음 페이지 렌더링 시 팀 리스트 값을 받아오기 위한 useEffect 함수
    useEffect(() => {
        functionGetTeamInfoList(setUserTeamInfoList, window.sessionStorage.id, setLoadingStatus);
    }, []);

    //pagination에서 마우스로 클릭 시 해당 버튼에 active 효과 부여하기 위한 onclick 함수
    const handlePaginationBtnOnClick = (e) => {
        
    }
    //pagination 예시를 위한 items 배열 생성
    /*
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} id={number-1} onClick={handlePaginationBtnOnClick}>
                {number}
            </Pagination.Item>,
        );
    }
    */
    
    if(userTeamInfoList.length !== 0 && loadingStatus) {
        return (
            <div id="teamMainAllContainer">
                <Table id='teamMainContentsContainer'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Team Name</th>
                            <th>Start Date</th>
                            <th>Member</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>JavaScript 스터디</td>
                            <td>2019/03/02</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Unity 스터디</td>
                            <td>2020/03/04</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Django 스터디</td>
                            <td>2021/04/05</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>JavaScript 스터디</td>
                            <td>2019/03/02</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Unity 스터디</td>
                            <td>2020/03/04</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Django 스터디</td>
                            <td>2021/04/05</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>JavaScript 스터디</td>
                            <td>2019/03/02</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Unity 스터디</td>
                            <td>2020/03/04</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Django 스터디</td>
                            <td>2021/04/05</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>JavaScript 스터디</td>
                            <td>2019/03/02</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>Unity 스터디</td>
                            <td>2020/03/04</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>Django 스터디</td>
                            <td>2021/04/05</td>
                            <td><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle><PersonCircle></PersonCircle></td>
                        </tr>
                    </tbody>
                </Table>
                <div id="teamMainPaginationContainer">
                    <Pagination id='paginationContainer'>1</Pagination>
                </div>
            </div>
        )
    }
    else if(userTeamInfoList.length === 0 && loadingStatus) {
        return (
            <div id="teamMainAllContainer" style={{textAlign:"center"}}>
                <p id="teamBelongNoneMessage">소속된 팀이 없습니다.</p>
                <Button variant="outline-primary" className='teamBelongNoneBtn'><Link to="/teammake">팀 생성</Link></Button>
                <Button variant="outline-primary" className='teamBelongNoneBtn'><Link to="/offerboard">팀 구인 게시판</Link></Button>
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

export default TeamMain;