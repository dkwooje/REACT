import {NavLink} from 'react-router-dom'
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={({isActive})=>isActive ? classes.active : undefined} end>홈</NavLink>
          </li>
          <li>
          <NavLink to="/events" className={({isActive})=>isActive ? classes.active : undefined} end>이벤트목록</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
