import { Link } from "react-router-dom";

const PRODUCTS = [
        { id: 'p1', title: '제품1'},
        { id: 'p2', title: '제품2'},
        { id: 'p3', title: '제품3'},
        { id: 'p3', title: '제품4'},
]


function ProductsPage(){
    return (
    <>
    <h1>여기는 제품들이 보여지는 페이지입니다.</h1>
        <ul>
            <li><Link to={`${PRODUCTS[0].id}`}>{`${PRODUCTS[0].title}`}</Link></li>
            <li><Link to={`${PRODUCTS[1].id}`}>{`${PRODUCTS[1].title}`}</Link></li>
            <li><Link to={`${PRODUCTS[2].id}`}>{`${PRODUCTS[2].title}`}</Link></li>
            {PRODUCTS.map((prod)=>(
                <li key={prod.id}>
                    <Link to={`${prod.id}`}>{prod.title}</Link>
                </li>
        ))}
        </ul>
    <p>
     메인 페이지로<Link to="/">이동</Link>
    </p>
    </>
    );
}

export default ProductsPage;