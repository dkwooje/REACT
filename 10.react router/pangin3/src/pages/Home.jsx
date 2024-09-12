import { Link } from "react-router-dom"; //<Link>사용자가 클릭하거나 탭하여 다른 페이지로 이동할 수 있게 해주는 요소입니다.  request를 발생시키지 않아 더 빠르다.
function HomePage(){
    return (
    <>
    <h1>간단한 홈 페이지</h1>
    <p>
        제품 목록 페이지로<Link to="/product">이동</Link>
    </p>
    </>
    );

}

export default HomePage;