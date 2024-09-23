import classes from './EventItem.module.css';
import { Link , useSubmit } from 'react-router-dom';

function EventItem({ event }) {
  const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('진짜 삭제할겁니까?');

    if(proceed){
      submit(null, {method: 'delete'});
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">편집</Link>
        <button onClick={startDeleteHandler}>삭제</button>
      </menu>
    </article>
  );
}

export default EventItem;
