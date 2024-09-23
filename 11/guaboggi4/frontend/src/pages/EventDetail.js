import { useRouteLoaderData,json,redirect} from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');
  return (
    <EventItem event={data.event} />
  );
}

export default EventDetailPage;

export async function loader({request, params}){
  const id = params.eventId;
  const response = await fetch('http://localhost:8080/events/'+id);
  if(!response.ok){
    throw json({message: '선택한 이벤트에 대한 상세 내용을 가져오는데 실패하였습니다'},{status:500});
  }else{
    return response;
  }
}

export async function action({params, request}) {
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/'+eventId, {
    method: request.method,
  });
  if(!response.ok){
    throw json({message: '선택된 이벤트에 대한 삭제처리에 실패하였습니다'},{status:500});
  }

  return redirect('/events');
}
