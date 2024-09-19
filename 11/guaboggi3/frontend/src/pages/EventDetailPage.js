import { useParams } from "react-router-dom";


function EventDetailPage(){

    const params = useParams();

    return(
        <>
        <h1>EventDetailPage</h1>
        <p>이벤트 ID : {params.eventId} </p>
        </>
    );
}

export default EventDetailPage;