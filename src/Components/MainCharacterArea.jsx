
function MainCharacterArea() {
    return (
        <div className="contentsContainer" id="characterContainer">
            <div className="contentsTitle" data-aos="fade-up" data-aos-duration="1200">
                다양한 아바타를 골라 팀원들과 활동하세요!
            </div>

            <div className="mainContentsContainer" data-aos="fade-up" data-aos-duration="1200">
                <div>
                    <h2>1. 남자1</h2>
                    <img src="https://www.shutterstock.com/image-illustration/3d-illustration-smiling-happy-hipster-600w-1901479738.jpg" />
                </div>
                <div>
                    <h2>2. 남자2</h2>
                    <img src="https://www.shutterstock.com/image-illustration/3d-illustration-smiling-happy-hipster-600w-1901479738.jpg" />
                </div>
            </div>

            <div className="mainContentsContainer" data-aos="fade-up" data-aos-duration="1200">
                <div>
                    <h2>3. 여자1</h2>
                    <img src="https://www.shutterstock.com/image-illustration/3d-illustration-smiling-happy-girl-600w-2053057919.jpg" />
                </div>
                <div>
                    <h2>4. 여자2</h2>
                    <img src="https://www.shutterstock.com/image-illustration/3d-illustration-smiling-happy-girl-600w-2053057919.jpg" />
                </div>
            </div>
        </div>
    )
}

export default MainCharacterArea;