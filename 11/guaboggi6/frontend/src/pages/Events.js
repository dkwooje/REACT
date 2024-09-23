import { useLoaderData, json } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if(data.isError){
  //   return <p>{data.message}</p>
  // }

  const events = data.events;

  return <EventsList events={events} />;
}

export default EventsPage;

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
