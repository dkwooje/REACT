import { NavLink } from "react-router-dom";
import classes from './MainNavigation.module.css'
function MainNavigation(){
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink  className={({isActive})=>(isActive ? classes.active : undefined) } end>홈으로</NavLink></li>
                    <li><NavLink to="product"  className={({isActive})=>(isActive ? classes.active : undefined)}>제품목록</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation;