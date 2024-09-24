import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";
import { Suspense } from "react";


function EventsPage() {
  const {events} = useLoaderData();


  return (
  <Suspense fallback={<p style={{textAlign: 'center'}}>페이지를 읽어오고 있습니다... </p>}>
    <Await resolve={events}>
      {(loadedEvents) => 
        <EventsList events={loadedEvents} />}
    </Await>
  </Suspense>
  );
}

export default EventsPage;


export  function loader() {
  return defer({
    events: loadEvents(),
  });
}


/*
async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");

if (!response.ok) {
  // throw new Response(JSON.stringify({message: '데이터를 가져오는데 실패하였습니다.'}),{status:500},);
  throw json(
    { message: "데이터를 가져오는데 실패하였습니다." },
    { status: 500 }
  );
} else {
  const resData = await response.json();
  return resData.events;
  }
}
*/



/*
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // throw new Response(JSON.stringify({message: '데이터를 가져오는데 실패하였습니다.'}),{status:500},);
    throw json(
      { message: "데이터를 가져오는데 실패하였습니다." },
      { status: 500 }
    );
  } else {
    return response;
  }
 
}

   */