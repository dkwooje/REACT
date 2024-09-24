import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";
import { Suspense } from 'react';
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
function EventDetailPage() {
  const { event, events } = useRouteLoaderData("event-detail");
  return (
    <>
    <Suspense fallback={<p style={{textAlign: 'center'}}>이벤트의 상세 내용을 읽어오는 중입니다...</p>}>
      <Await resolve={event}>
        {loadedEvent => <EventItem event={loadedEvent} />}
      </Await>
    </Suspense>
    <Suspense fallback={<p style={{textAlign: 'center'}}>이벤트 목록을 읽어오는 중입니다...</p>}>
      <Await resolve={events}>
        { loadedEvents => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
    </>
  );
}

export default EventDetailPage;

async function loadEvent(id) {
  const response = await fetch("http://localhost:8080/events/" + id);
  if (!response.ok) {
    throw json(
      { message: "선택한 이벤트에 대한 상세 내용을 가져오는데 실패하였습니다" },
      { status: 500 }
    );
  } else {
    const resData = await response.json();
    return resData.event;
  }
}

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

export async function loader({ request, params }) {
  const id = params.eventId;
  return defer({
    event: await loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ params, request }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
  });
  if (!response.ok) {
    throw json(
      { message: "선택된 이벤트에 대한 삭제처리에 실패하였습니다" },
      { status: 500 }
    );
  }

  return redirect("/events");
}
