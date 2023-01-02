//import Main css
import "../css/Main.css";
//import aos
import AOS from "aos";
import "aos/dist/aos.css";
//import react hooks
import { useEffect } from "react";
//import user component
import MainMapArea from "./MainMapArea";
import MainCharacterArea from "./MainCharacterArea";

function Main() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div className="contentCenter" id="mainContentContainer">
                <div data-aos="fade-up" data-aos-duration="1200">
                상상하는 모든 것.<br/>
                서일대학교에서.
                </div>
            </div>
            <MainMapArea></MainMapArea>
            <MainCharacterArea></MainCharacterArea>
        </>
    )
}

export default Main;