//import react hooks
import { useEffect } from "react";
//import functions
import functionBoardDetail from "../../Functions/FunctionBoard/functionBoardDetail";

function BoardDetail() {

    //게시글 첫 렌더링 시 해당 게시글의 내용을 받아오기 위한 useEffect 함수
    useEffect(() => {
        functionBoardDetail(window.sessionStorage.currentClickBoardID);
    }, []);

    return (
        <div>
            게시글 디테일입니다~
        </div>
    )
}

export default BoardDetail;