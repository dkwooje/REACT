import { Link } from "react-router-dom";
function ProductsPage(){
    return (
    <>
    <h1>여기는 제품들이 보여지는 페이지입니다.</h1>
    <p>
    제품 목록 페이지로<Link to="/">이동</Link>
    </p>
    </>
    )
}

export default ProductsPage;