import { Link, useParams } from "react-router-dom";

function ProductsDetailPage(){

    const params = useParams();

    return(<>
    <h1>제품 상세 페이지</h1>
    <p>{params.productId}</p>
    <p><Link to=".." relative="path">뒤로가기</Link></p> 
    </>
)
}
//relative 기본형 :"route"
export default ProductsDetailPage;