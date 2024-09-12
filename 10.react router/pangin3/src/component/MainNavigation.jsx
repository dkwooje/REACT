import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css'
function MainNavigation(){
    return(
        <header>
            <nav>
                <ul className={classes.list}>
                    <li><Link to="/">홈으로</Link></li>
                    <li><Link to="/product">제품목록</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;