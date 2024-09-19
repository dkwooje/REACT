import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
    {
        id: 'e1',
        title: '첫번째 이벤트'
    },
    {
        id: 'e2',
        title: '두번째 이벤트'
    },
]


function EventsPage(){
    return(
        <>
        <h1>EventsPage</h1>
        <ul>
            {DUMMY_EVENTS.map((event) => (
             <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
            </li>
         ))}
        </ul>
        </>
    );
}

export default EventsPage;