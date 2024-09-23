import classes from './EventsNavigation.module.css';
import { NavLink } from 'react-router-dom';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/events" className={( {isActive })=> isActive ? classes.active : undefined} end>모든 이벤트</NavLink>
          </li>
          <li>
            <NavLink to="/events/new" className={({isActive})=> isActive ? classes.active : undefined} end>새로운 이벤트</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
