//import react bootstrap
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
//import css
import "../../css/TeamPageCss/TeamMain.css";
//import react bootstrap icons
import { PersonCircle } from "react-bootstrap-icons"
//import react hooks
import { useState } from 'react';


//자신이 갖고 있는 팀의 리스트를 볼 수 있는 팀 메인 페이지 component
function TeamMain() {

    //pagination에서 마우스로 클릭 시 해당 버튼에 active 효과 부여하기 위한 onclick 함수
    const handlePaginationBtnOnClick = (e) => {
        
    }
    //pagination 예시를 위한 items 배열 생성
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} id={number-1} onClick={handlePaginationBtnOnClick}>
                {number}
            </Pagination.Item>,
        );
    }
    
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
                <Pagination id='paginationContainer'>{items}</Pagination>
            </div>
        </div>
    )
}

export default TeamMain;